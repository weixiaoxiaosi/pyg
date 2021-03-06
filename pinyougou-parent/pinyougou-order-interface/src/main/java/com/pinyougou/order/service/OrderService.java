package com.pinyougou.order.service;
import java.util.List;

import com.pinyougou.entity.PageResult;
import com.pinyougou.pojo.TbOrder;
import com.pinyougou.pojo.TbPayLog;

/**
 * 业务逻辑接口
 * @author Steven
 *
 */
public interface OrderService {

	/**
	* @Date 2019/4/4 15:13
	* 修改订单状态
	* @Param [out_trade_no, transaction_id]
	* @return void
	**/
	public void updateOrderStatus(String out_trade_no,String transaction_id);

	/**
	* @Date 2019/4/4 15:08
	* 根据用户查询payLog
	* @Param [userId]
	* @return com.pinyougou.pojo.TbPayLog
	**/ 
	public TbPayLog searchPayLogFromRedis(String userId);

	/**
	 * 返回全部列表
	 * @return
	 */
	public List<TbOrder> findAll();
	
	
	/**
	 * 返回分页列表
	 * @return
	 */
	public PageResult findPage(int pageNum, int pageSize);
	
	
	/**
	 * 增加
	*/
	public void add(TbOrder order);
	
	
	/**
	 * 修改
	 */
	public void update(TbOrder order);
	

	/**
	 * 根据ID获取实体
	 * @param id
	 * @return
	 */
	public TbOrder findOne(Long id);
	
	
	/**
	 * 批量删除
	 * @param ids
	 */
	public void delete(Long[] ids);

	/**
	 * 分页
	 * @param pageNum 当前页 码
	 * @param pageSize 每页记录数
	 * @return
	 */
	public PageResult findPage(TbOrder order, int pageNum, int pageSize);
	
}
