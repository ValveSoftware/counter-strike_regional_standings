### Roster Details<br />
Team Name: Hype<br />
Roster: history, leo_drk, ninjaZ, redi, vinaabEAST<br />
Global Rank: [204](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [56]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  603.0<br />
<br />
Final Rank Value (603.0) = Starting Rank Value (604.8) + Head To Head Adjustments (-1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.8
- 400 + ( ( 0.111 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 604.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2174 | 2024-11-28 | Players  | L   | 0.336      | -            | -                | -                | -         |    -4.05 | history, leo_drk, ninjaZ, redi, vinaabEAST |
|            4 |     2634 | 2024-11-08 | Solid    | L   | 0.200      | -            | -                | -                | -         |    -1.83 | history, leo_drk, MaLLby, redi, vinaabEAST |
|            3 |     2665 | 2024-11-06 | ShindeN  | W   | 0.189      | 0.371        | 0.015 (0.001)    | 0.707 (0.050)    | 0 (0.000) |     4.01 | history, leo_drk, MaLLby, redi, vinaabEAST |
|            2 |     3210 | 2024-10-09 | Case     | L   | 0.002      | -            | -                | -                | -         |    -0.04 | history, leo_drk, MaLLby, redi, vinaabEAST |
|            1 |     3216 | 2024-10-09 | Case     | W   | 0.002      | 0.450        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.03 | history, leo_drk, MaLLby, redi, vinaabEAST |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($179.60)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.209 | $750.00        | $157.07         |
| 2024-10-20 |      0.075 | $300.00        | $22.53          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
