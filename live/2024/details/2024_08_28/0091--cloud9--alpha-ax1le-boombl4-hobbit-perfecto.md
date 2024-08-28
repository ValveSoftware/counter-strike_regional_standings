### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Global Rank: [91](../../standings_global_2024_08_28.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_28.md)<br />
Regional Rank: [64]( ../../standings_europe_2024_08_28.md)<br />
<br />
Final Rank Value:  887.0<br />
<br />
Final Rank Value (887.0) = Starting Rank Value (865.4) + Head To Head Adjustments (21.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.413[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.4
- 400 + ( ( 0.235 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 865.4


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
|           16 |     3528 | 2024-04-20 | Sashi             | L   | 0.333      | -            | -                | -                | -         |    -2.40 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           15 |     3559 | 2024-04-19 | BetBoom           | W   | 0.327      | 0.143        | 0.273 (0.013)    | 0.497 (0.023)    | 0 (0.000) |     9.37 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           14 |     3573 | 2024-04-19 | Sashi             | L   | 0.327      | -            | -                | -                | -         |    -2.30 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           13 |     3848 | 2024-04-10 | FaZe              | L   | 0.264      | -            | -                | -                | -         |    -0.08 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     3898 | 2024-04-08 | Wildcard          | W   | 0.257      | 0.624        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.257) |     1.07 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     3928 | 2024-04-08 | FlyQuest          | L   | 0.251      | -            | -                | -                | -         |    -2.48 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     4151 | 2024-03-28 | Vitality          | L   | 0.180      | -            | -                | -                | -         |    -0.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     4234 | 2024-03-23 | Natus Vincere     | W   | 0.148      | 1.000        | 1.000 (0.148)    | 0.368 (0.054)    | 1 (0.148) |     4.65 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     4258 | 2024-03-22 | G2                | W   | 0.139      | 1.000        | 1.000 (0.139)    | 0.443 (0.061)    | 1 (0.139) |     4.36 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     4269 | 2024-03-21 | Gaimin Gladiators | W   | 0.134      | 1.000        | 0.026 (0.003)    | 0.347 (0.047)    | 1 (0.134) |     2.16 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     4277 | 2024-03-21 | Spirit            | L   | 0.133      | -            | -                | -                | -         |    -0.03 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     4325 | 2024-03-18 | SAW               | W   | 0.114      | 0.143        | 0.360 (0.006)    | 0.657 (0.011)    | 1 (0.114) |     3.52 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     4343 | 2024-03-17 | Legacy            | W   | 0.108      | 0.143        | 0.109 (0.002)    | 0.584 (0.009)    | 1 (0.108) |     1.97 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     4361 | 2024-03-17 | Gaimin Gladiators | W   | 0.105      | 0.143        | 0.026 (0.000)    | 0.347 (0.005)    | 1 (0.105) |     1.70 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     4569 | 2024-03-08 | SAW               | L   | 0.048      | -            | -                | -                | -         |    -0.03 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4635 | 2024-03-06 | Rare Atom         | W   | 0.033      | 0.535        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.14 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,958.08)
- Divide that value by the 5th highest value among all rosters ($290,989.03)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.292 | $5,000.00      | $1,459.81       |
| 2024-03-31 |      0.201 | $45,000.00     | $9,039.09       |
| 2024-03-10 |      0.061 | $7,500.00      | $459.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
