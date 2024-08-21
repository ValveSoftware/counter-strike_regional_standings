### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Global Rank: [80](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [58]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  934.0<br />
<br />
Final Rank Value (934.0) = Starting Rank Value (907.3) + Head To Head Adjustments (26.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.425[<sup>1</sup>](#table2)
- Bounty Collected: 0.419[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.256<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 907.3
- 400 + ( ( 0.256 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 907.3


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
|           16 |     3233 | 2024-04-20 | Sashi             | L   | 0.378      | -            | -                | -                | -         |    -3.18 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           15 |     3264 | 2024-04-19 | BetBoom           | W   | 0.373      | 0.143        | 0.279 (0.015)    | 0.507 (0.027)    | 0 (0.000) |    10.62 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           14 |     3278 | 2024-04-19 | Sashi             | L   | 0.372      | -            | -                | -                | -         |    -3.06 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           13 |     3553 | 2024-04-10 | FaZe              | L   | 0.310      | -            | -                | -                | -         |    -0.11 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     3603 | 2024-04-08 | Wildcard          | W   | 0.303      | 0.624        | 0.004 (0.001)    | 0.000 (0.000)    | 1 (0.303) |     1.01 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     3633 | 2024-04-08 | FlyQuest          | L   | 0.296      | -            | -                | -                | -         |    -3.03 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     3856 | 2024-03-28 | Vitality          | L   | 0.226      | -            | -                | -                | -         |    -0.02 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3939 | 2024-03-23 | Natus Vincere     | W   | 0.194      | 1.000        | 1.000 (0.194)    | 0.382 (0.074)    | 1 (0.194) |     6.08 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3963 | 2024-03-22 | G2                | W   | 0.184      | 1.000        | 1.000 (0.184)    | 0.471 (0.087)    | 1 (0.184) |     5.79 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3974 | 2024-03-21 | Gaimin Gladiators | W   | 0.180      | 1.000        | 0.029 (0.005)    | 0.309 (0.055)    | 1 (0.180) |     2.60 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3982 | 2024-03-21 | Spirit            | L   | 0.179      | -            | -                | -                | -         |    -0.04 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     4030 | 2024-03-18 | SAW               | W   | 0.159      | 0.143        | 0.349 (0.008)    | 0.656 (0.015)    | 1 (0.159) |     4.93 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     4048 | 2024-03-17 | Legacy            | W   | 0.153      | 0.143        | 0.110 (0.002)    | 0.530 (0.012)    | 1 (0.153) |     2.66 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     4066 | 2024-03-17 | Gaimin Gladiators | W   | 0.151      | 0.143        | 0.029 (0.001)    | 0.309 (0.007)    | 1 (0.151) |     2.19 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     4274 | 2024-03-08 | SAW               | L   | 0.094      | -            | -                | -                | -         |    -0.05 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4340 | 2024-03-06 | Rare Atom         | W   | 0.079      | 0.535        | 0.002 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.27 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,583.78)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.338 | $5,000.00      | $1,688.14       |
| 2024-03-31 |      0.247 | $45,000.00     | $11,093.99      |
| 2024-03-10 |      0.107 | $7,500.00      | $801.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
