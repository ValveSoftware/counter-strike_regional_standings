### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [82](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [59]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  907.1<br />
<br />
Final Rank Value (907.1) = Starting Rank Value (868.3) + Head To Head Adjustments (38.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.165[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 868.3
- 400 + ( ( 0.241 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 868.3


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
|           35 |      653 | 2024-08-23 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -16.96 | Aaron, Bibu, DGL, kory, Porya      |
|           34 |      683 | 2024-08-22 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -4.72 | Aaron, Bibu, DGL, kory, Porya      |
|           33 |      711 | 2024-08-21 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -1.16 | Aaron, Bibu, DGL, kory, Porya      |
|           32 |      742 | 2024-08-21 | Sashi             | W   | 1.000      | 0.143        | 0.150 (0.021)    | 0.913 (0.130)    | 0 (0.000) |    22.42 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |     1098 | 2024-08-09 | Sashi             | L   | 0.978      | -            | -                | -                | -         |    -8.23 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1112 | 2024-08-08 | Permitta          | W   | 0.973      | 0.426        | 0.032 (0.013)    | 0.936 (0.388)    | 0 (0.000) |    16.21 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1410 | 2024-07-31 | B8                | L   | 0.921      | -            | -                | -                | -         |    -6.40 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     1459 | 2024-07-30 | Space             | W   | 0.914      | 0.500        | 0.004 (0.002)    | 0.478 (0.219)    | 0 (0.000) |    11.75 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     1494 | 2024-07-29 | ARCRED            | L   | 0.907      | -            | -                | -                | -         |   -13.05 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     1819 | 2024-07-19 | Nexus             | L   | 0.840      | -            | -                | -                | -         |   -18.95 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     1852 | 2024-07-18 | Nemiga            | L   | 0.834      | -            | -                | -                | -         |    -5.64 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     1931 | 2024-07-17 | Verdant           | W   | 0.827      | 0.333        | 0.011 (0.003)    | 0.341 (0.094)    | 0 (0.000) |     9.06 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     1987 | 2024-07-16 | Aurora            | L   | 0.821      | -            | -                | -                | -         |    -2.40 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     2038 | 2024-07-15 | Betera            | W   | 0.814      | -            | -                | -                | 0 (0.000) |     3.57 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     2355 | 2024-06-13 | Enterprise        | W   | 0.601      | 0.379        | 0.039 (0.009)    | 0.673 (0.153)    | 0 (0.000) |     9.28 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     2391 | 2024-06-12 | Rebels            | W   | 0.594      | 0.379        | 0.028 (0.006)    | 0.670 (0.151)    | 0 (0.000) |    10.44 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     2411 | 2024-06-11 | ECLOT             | W   | 0.587      | 0.379        | 0.071 (0.016)    | 0.733 (0.163)    | 0 (0.000) |    14.59 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     2614 | 2024-06-07 | B8                | L   | 0.560      | -            | -                | -                | -         |    -4.13 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     2618 | 2024-06-07 | Aurora            | L   | 0.559      | -            | -                | -                | -         |    -1.21 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     2718 | 2024-06-05 | The Prodigies     | W   | 0.547      | -            | -                | -                | 0 (0.000) |     2.12 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     2801 | 2024-06-03 | GL Academy        | W   | 0.534      | -            | -                | -                | -         |     4.12 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     2907 | 2024-05-30 | Rebels            | L   | 0.508      | -            | -                | -                | -         |    -7.30 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     3087 | 2024-05-22 | System5           | W   | 0.454      | -            | -                | -                | -         |     2.84 | Aaron, Bibu, DGL, kory, Porya      |
|           12 |     3135 | 2024-05-21 | EYEBALLERS        | W   | 0.447      | -            | -                | -                | -         |     4.54 | Aaron, Bibu, DGL, kory, Porya      |
|           11 |     3174 | 2024-05-20 | Nexus             | W   | 0.440      | 0.379        | 0.009 (0.002)    | 0.415 (0.069)    | -         |     4.80 | Aaron, Bibu, DGL, kory, Porya      |
|           10 |     3344 | 2024-05-15 | Norway            | W   | 0.407      | -            | -                | -                | -         |     2.69 | Aaron, Bibu, DGL, kory, Porya      |
|            9 |     3403 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.401      | 0.500        | 0.103 (0.021)    | 0.812 (0.163)    | -         |     8.99 | Aaron, Bibu, DGL, kory, Porya      |
|            8 |     3627 | 2024-05-04 | FlyQuest          | L   | 0.332      | -            | -                | -                | -         |    -3.10 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            7 |     3642 | 2024-05-03 | BIG               | L   | 0.326      | -            | -                | -                | -         |    -1.16 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            6 |     3662 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.320      | 0.889        | 0.232 (0.066)    | 0.408 (0.116)    | 1 (0.320) |     9.62 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            5 |     3712 | 2024-04-30 | Complexity        | L   | 0.306      | -            | -                | -                | -         |    -0.21 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            4 |     3922 | 2024-04-20 | EYEBALLERS        | L   | 0.241      | -            | -                | -                | -         |    -5.17 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            3 |     4461 | 2024-04-03 | SAW               | L   | 0.126      | -            | -                | -                | -         |    -0.10 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            2 |     4516 | 2024-04-01 | RUSH B            | W   | 0.114      | -            | -                | -                | -         |     1.68 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            1 |     4793 | 2024-03-15 | Betera            | L   | 0.001      | -            | -                | -                | -         |    -0.01 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,601.10)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.847 | $1,250.00      | $1,058.62       |
| 2024-06-13 |      0.601 | $10,895.00     | $6,548.75       |
| 2024-06-09 |      0.574 | $500.00        | $287.02         |
| 2024-05-12 |      0.387 | $7,000.00      | $2,706.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
