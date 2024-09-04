### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [80](../../standings_global_2024_09_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_04.md)<br />
Regional Rank: [58]( ../../standings_europe_2024_09_04.md)<br />
<br />
Final Rank Value:  927.4<br />
<br />
Final Rank Value (927.4) = Starting Rank Value (893.0) + Head To Head Adjustments (34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.410[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.186[<sup>2</sup>](#table1)
- LAN Wins: 0.039[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 893.0
- 400 + ( ( 0.249 - 0.000 ) / ( 0.808 - 0.000 ) ) * 1600 = 893.0


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
|           36 |      448 | 2024-08-23 | Insilio           | L   | 1.000      | -            | -                | -                | -         |   -17.57 | Aaron, Bibu, DGL, kory, Porya      |
|           35 |      478 | 2024-08-22 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -5.46 | Aaron, Bibu, DGL, kory, Porya      |
|           34 |      506 | 2024-08-21 | SAW               | L   | 1.000      | -            | -                | -                | -         |    -1.28 | Aaron, Bibu, DGL, kory, Porya      |
|           33 |      537 | 2024-08-21 | Sashi             | W   | 1.000      | 0.143        | 0.152 (0.022)    | 0.966 (0.138)    | 0 (0.000) |    22.22 | Aaron, Bibu, DGL, kory, Porya      |
|           32 |      893 | 2024-08-09 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -8.53 | Aaron, Bibu, DGL, kory, Porya      |
|           31 |      907 | 2024-08-08 | Permitta          | W   | 1.000      | 0.426        | 0.032 (0.013)    | 0.988 (0.421)    | 0 (0.000) |    16.04 | Aaron, Bibu, DGL, kory, Porya      |
|           30 |     1205 | 2024-07-31 | B8                | L   | 0.968      | -            | -                | -                | -         |    -7.65 | Aaron, Bibu, DGL, kory, Porya      |
|           29 |     1254 | 2024-07-30 | Space             | W   | 0.961      | 0.500        | 0.004 (0.002)    | 0.458 (0.220)    | 0 (0.000) |    11.98 | Aaron, Bibu, DGL, kory, Porya      |
|           28 |     1289 | 2024-07-29 | ARCRED            | L   | 0.954      | -            | -                | -                | -         |   -14.07 | Aaron, Bibu, DGL, kory, Porya      |
|           27 |     1614 | 2024-07-19 | Nexus             | L   | 0.887      | -            | -                | -                | -         |   -20.44 | Aaron, Bibu, DGL, kory, Porya      |
|           26 |     1647 | 2024-07-18 | Nemiga            | L   | 0.881      | -            | -                | -                | -         |    -6.78 | Aaron, Bibu, DGL, kory, Porya      |
|           25 |     1726 | 2024-07-17 | Verdant           | W   | 0.874      | 0.333        | 0.011 (0.003)    | 0.364 (0.106)    | 0 (0.000) |     9.07 | Aaron, Bibu, DGL, kory, Porya      |
|           24 |     1782 | 2024-07-16 | Aurora            | L   | 0.867      | -            | -                | -                | -         |    -2.52 | Aaron, Bibu, DGL, kory, Porya      |
|           23 |     1833 | 2024-07-15 | Betera            | W   | 0.861      | -            | -                | -                | 0 (0.000) |     3.16 | Aaron, Bibu, DGL, kory, Porya      |
|           22 |     2150 | 2024-06-13 | Enterprise        | W   | 0.648      | 0.379        | 0.039 (0.010)    | 0.719 (0.176)    | 0 (0.000) |     9.78 | Aaron, Bibu, DGL, kory, Porya      |
|           21 |     2186 | 2024-06-12 | Rebels            | W   | 0.641      | 0.379        | 0.029 (0.007)    | 0.639 (0.155)    | 0 (0.000) |    11.01 | Aaron, Bibu, DGL, kory, Porya      |
|           20 |     2206 | 2024-06-11 | ECLOT             | W   | 0.634      | 0.379        | 0.072 (0.017)    | 0.677 (0.163)    | 0 (0.000) |    15.67 | Aaron, Bibu, DGL, kory, Porya      |
|           19 |     2409 | 2024-06-07 | B8                | L   | 0.606      | -            | -                | -                | -         |    -5.22 | Aaron, Bibu, DGL, kory, Porya      |
|           18 |     2413 | 2024-06-07 | Aurora            | L   | 0.606      | -            | -                | -                | -         |    -1.23 | Aaron, Bibu, DGL, kory, Porya      |
|           17 |     2513 | 2024-06-05 | The Prodigies     | W   | 0.594      | -            | -                | -                | 0 (0.000) |     2.08 | Aaron, Bibu, DGL, kory, Porya      |
|           16 |     2596 | 2024-06-03 | GL Academy        | W   | 0.581      | -            | -                | -                | -         |     4.31 | Aaron, Bibu, DGL, kory, Porya      |
|           15 |     2702 | 2024-05-30 | Rebels            | L   | 0.554      | -            | -                | -                | -         |    -8.15 | Aaron, Bibu, DGL, kory, Porya      |
|           14 |     2882 | 2024-05-22 | System5           | W   | 0.501      | -            | -                | -                | -         |     2.85 | Aaron, Bibu, DGL, kory, Porya      |
|           13 |     2930 | 2024-05-21 | EYEBALLERS        | W   | 0.494      | 0.500        | -                | 0.624 (0.154)    | -         |     6.81 | Aaron, Bibu, DGL, kory, Porya      |
|           12 |     2969 | 2024-05-20 | Nexus             | W   | 0.487      | 0.379        | 0.010 (0.002)    | -                | -         |     5.06 | Aaron, Bibu, DGL, kory, Porya      |
|           11 |     3139 | 2024-05-15 | Norway            | W   | 0.454      | -            | -                | -                | -         |     2.83 | Aaron, Bibu, DGL, kory, Porya      |
|           10 |     3198 | 2024-05-14 | ALTERNATE aTTaX   | W   | 0.448      | 0.500        | 0.099 (0.022)    | 0.820 (0.184)    | -         |     9.70 | Aaron, Bibu, DGL, kory, Porya      |
|            9 |     3422 | 2024-05-04 | FlyQuest          | L   | 0.379      | -            | -                | -                | -         |    -4.33 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            8 |     3437 | 2024-05-03 | BIG               | L   | 0.373      | -            | -                | -                | -         |    -1.63 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            7 |     3457 | 2024-05-02 | Ninjas in Pyjamas | W   | 0.367      | 0.889        | 0.211 (0.069)    | 0.448 (0.146)    | 1 (0.367) |    11.07 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            6 |     3507 | 2024-04-30 | Complexity        | L   | 0.353      | -            | -                | -                | -         |    -0.25 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            5 |     3717 | 2024-04-20 | EYEBALLERS        | L   | 0.287      | -            | -                | -                | -         |    -4.71 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            4 |     4256 | 2024-04-03 | SAW               | L   | 0.173      | -            | -                | -                | -         |    -0.13 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            3 |     4311 | 2024-04-01 | RUSH B            | W   | 0.161      | -            | -                | -                | -         |     2.30 | Aaron, Bibu, Ciocardau, DGL, Porya |
|            2 |     4588 | 2024-03-15 | Betera            | L   | 0.047      | -            | -                | -                | -         |    -1.17 | Aaron, DGL, Kamion, msN, Porya     |
|            1 |     4646 | 2024-03-13 | Monte             | L   | 0.035      | -            | -                | -                | -         |    -0.44 | Aaron, DGL, Kamion, msN, Porya     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,522.40)
- Divide that value by the 5th highest value among all rosters ($315,326.30)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.894 | $1,250.00      | $1,117.24       |
| 2024-06-13 |      0.648 | $10,895.00     | $7,059.70       |
| 2024-06-09 |      0.621 | $500.00        | $310.47         |
| 2024-05-12 |      0.434 | $7,000.00      | $3,034.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
