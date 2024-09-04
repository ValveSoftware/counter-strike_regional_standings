### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Global Rank: [99](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [72]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  836.6<br />
<br />
Final Rank Value (836.6) = Starting Rank Value (820.5) + Head To Head Adjustments (16.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.388[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.072[<sup>2</sup>](#table1)

The average of these factors is 0.212<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 820.5
- 400 + ( ( 0.212 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 820.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3729 | 2024-04-20 | Sashi             | L   | 0.286      | -            | -                | -                | -         |    -1.75 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           14 |     3760 | 2024-04-19 | BetBoom           | W   | 0.281      | 0.143        | 0.232 (0.009)    | 0.521 (0.021)    | 0 (0.000) |     8.14 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           13 |     3774 | 2024-04-19 | Sashi             | L   | 0.280      | -            | -                | -                | -         |    -1.67 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           12 |     4049 | 2024-04-10 | FaZe              | L   | 0.217      | -            | -                | -                | -         |    -0.05 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     4099 | 2024-04-08 | Wildcard          | W   | 0.211      | 0.624        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.211) |     1.09 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     4129 | 2024-04-08 | FlyQuest          | L   | 0.204      | -            | -                | -                | -         |    -1.92 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     4352 | 2024-03-28 | Vitality          | L   | 0.134      | -            | -                | -                | -         |    -0.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     4435 | 2024-03-23 | Natus Vincere     | W   | 0.101      | 1.000        | 1.000 (0.101)    | 0.412 (0.042)    | 1 (0.101) |     3.19 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     4459 | 2024-03-22 | G2                | W   | 0.092      | 1.000        | 1.000 (0.092)    | 0.476 (0.044)    | 1 (0.092) |     2.90 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     4470 | 2024-03-21 | Gaimin Gladiators | W   | 0.088      | 1.000        | 0.020 (0.002)    | 0.473 (0.041)    | 1 (0.088) |     1.71 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     4478 | 2024-03-21 | Spirit            | L   | 0.087      | -            | -                | -                | -         |    -0.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     4526 | 2024-03-18 | SAW               | W   | 0.067      | 0.143        | 0.323 (0.003)    | 0.768 (0.007)    | 1 (0.067) |     2.08 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     4544 | 2024-03-17 | Legacy            | W   | 0.061      | 0.143        | 0.093 (0.001)    | 0.736 (0.006)    | 1 (0.061) |     1.21 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     4562 | 2024-03-17 | Gaimin Gladiators | W   | 0.059      | 0.143        | 0.020 (0.000)    | 0.473 (0.004)    | 1 (0.059) |     1.16 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4770 | 2024-03-08 | SAW               | L   | 0.001      | -            | -                | -                | -         |    -0.00 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,283.44)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.245 | $5,000.00      | $1,227.24       |
| 2024-03-31 |      0.154 | $45,000.00     | $6,945.90       |
| 2024-03-10 |      0.015 | $7,500.00      | $110.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
