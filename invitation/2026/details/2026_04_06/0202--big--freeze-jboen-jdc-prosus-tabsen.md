### Roster Details<br />
Team Name: BIG<br />
Roster: FreeZe, JBOEN, JDC, prosus, tabseN<br />
Global Rank: [202](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [135]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  744.7<br />
<br />
Final Rank Value (744.7) = Starting Rank Value (731.0) + Head To Head Adjustments (13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.094[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 731.0
- 400 + ( ( 0.169 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 731.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4719 | 2025-11-09 | Mousquetaires | W   | 0.213      | 0.433        | 0.007 (0.001)    | 0.054 (0.005)    | 1 (0.213) |     3.04 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            5 |     4784 | 2025-11-08 | Arise         | W   | 0.205      | 0.433        | 0.002 (0.000)    | 0.106 (0.009)    | 1 (0.205) |     2.41 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            4 |     4866 | 2025-11-07 | Unitronics    | W   | 0.199      | 0.433        | 0.000 (0.000)    | 0.006 (0.001)    | 1 (0.199) |     1.28 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            3 |     5004 | 2025-11-02 | M80           | L   | 0.168      | -            | -                | -                | -         |    -0.09 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            2 |     5023 | 2025-11-01 | Imperial      | W   | 0.163      | 0.333        | 0.043 (0.002)    | 0.529 (0.029)    | 1 (0.163) |     4.93 | FreeZe, JBOEN, JDC, prosus, tabseN |
|            1 |     5032 | 2025-11-01 | FlyQuest RED  | W   | 0.161      | 0.333        | 0.007 (0.000)    | 0.072 (0.004)    | 1 (0.161) |     2.14 | FreeZe, JBOEN, JDC, prosus, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,883.89)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.213 | $30,000.00     | $6,380.28       |
| 2025-11-02 |      0.168 | $3,000.00      | $503.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
