### Roster Details<br />
Team Name: OG<br />
Roster: F1KU, k1to, MoDo, Nexius, Thomas<br />
Global Rank: [166](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [108]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  662.8<br />
<br />
Final Rank Value (662.8) = Starting Rank Value (669.5) + Head To Head Adjustments (-6.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.344[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.139<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.5
- 400 + ( ( 0.139 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 669.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     2516 | 2024-07-30 | Complexity        | L   | 0.687      | -            | -                | -                | -         |    -0.13 | F1KU, k1to, MoDo, Nexius, Thomas   |
|           11 |     2554 | 2024-07-29 | Spirit            | L   | 0.679      | -            | -                | -                | -         |    -0.02 | F1KU, k1to, MoDo, Nexius, Thomas   |
|           10 |     3967 | 2024-05-30 | Chinggis Warriors | L   | 0.280      | -            | -                | -                | -         |    -2.34 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            9 |     3995 | 2024-05-29 | ATOX              | L   | 0.272      | -            | -                | -                | -         |    -3.84 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            8 |     4254 | 2024-05-19 | paiN              | L   | 0.206      | -            | -                | -                | -         |    -0.06 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            7 |     4262 | 2024-05-18 | Liquid            | L   | 0.202      | -            | -                | -                | -         |    -0.03 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            6 |     4726 | 2024-05-01 | Insilio           | L   | 0.088      | -            | -                | -                | -         |    -0.46 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            5 |     4755 | 2024-04-30 | Sashi             | L   | 0.080      | -            | -                | -                | -         |    -0.36 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            4 |     4975 | 2024-04-20 | MIBR              | L   | 0.014      | -            | -                | -                | -         |    -0.01 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            3 |     4993 | 2024-04-19 | 9z                | W   | 0.010      | 0.589        | 0.236 (0.001)    | 0.351 (0.002)    | 1 (0.010) |     0.31 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            2 |     5003 | 2024-04-19 | Monte             | W   | 0.009      | 0.589        | 0.035 (0.000)    | 0.123 (0.001)    | 1 (0.009) |     0.18 | F1KU, HeavyGod, k1to, MoDo, Nexius |
|            1 |     5048 | 2024-04-18 | MIBR              | L   | 0.002      | -            | -                | -                | -         |    -0.00 | F1KU, HeavyGod, k1to, MoDo, Nexius |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,853.14)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      0.720 | $5,000.00      | $3,601.95       |
| 2024-05-02 |      0.094 | $1,000.00      | $94.34          |
| 2024-04-20 |      0.016 | $10,000.00     | $156.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
