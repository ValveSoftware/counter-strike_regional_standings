### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Global Rank: [122](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [86]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  775.4<br />
<br />
Final Rank Value (775.4) = Starting Rank Value (765.7) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.338[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.037[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 765.7
- 400 + ( ( 0.188 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 765.7


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
|           14 |     3934 | 2024-04-20 | Sashi             | L   | 0.239      | -            | -                | -                | -         |    -1.23 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           13 |     3965 | 2024-04-19 | BetBoom           | W   | 0.234      | 0.143        | 0.227 (0.008)    | 0.511 (0.017)    | 0 (0.000) |     6.82 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           12 |     3979 | 2024-04-19 | Sashi             | L   | 0.233      | -            | -                | -                | -         |    -1.17 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           11 |     4254 | 2024-04-10 | FaZe              | L   | 0.170      | -            | -                | -                | -         |    -0.02 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     4304 | 2024-04-08 | Wildcard          | W   | 0.164      | 0.624        | 0.003 (0.000)    | 0.000 (0.000)    | 1 (0.164) |     1.09 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     4334 | 2024-04-08 | FlyQuest          | L   | 0.157      | -            | -                | -                | -         |    -0.99 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     4557 | 2024-03-28 | Vitality          | L   | 0.087      | -            | -                | -                | -         |    -0.00 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     4640 | 2024-03-23 | Natus Vincere     | W   | 0.055      | 1.000        | 1.000 (0.055)    | 0.460 (0.025)    | 1 (0.055) |     1.72 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     4664 | 2024-03-22 | G2                | W   | 0.045      | 1.000        | 1.000 (0.045)    | 0.500 (0.023)    | 1 (0.045) |     1.43 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     4675 | 2024-03-21 | Gaimin Gladiators | W   | 0.041      | 1.000        | 0.016 (0.001)    | 0.477 (0.019)    | 1 (0.041) |     0.87 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     4683 | 2024-03-21 | Spirit            | L   | 0.040      | -            | -                | -                | -         |    -0.00 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     4731 | 2024-03-18 | SAW               | W   | 0.020      | 0.143        | 0.337 (0.001)    | 0.760 (0.002)    | 1 (0.020) |     0.63 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     4749 | 2024-03-17 | Legacy            | W   | 0.014      | 0.143        | 0.091 (0.000)    | 0.708 (0.001)    | 1 (0.014) |     0.31 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4767 | 2024-03-17 | Gaimin Gladiators | W   | 0.012      | 0.143        | 0.016 (0.000)    | 0.477 (0.001)    | 1 (0.012) |     0.26 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,828.27)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.199 | $5,000.00      | $992.75         |
| 2024-03-31 |      0.107 | $45,000.00     | $4,835.52       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
