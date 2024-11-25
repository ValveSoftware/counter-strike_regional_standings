### Roster Details<br />
Team Name: Qiang<br />
Roster: Aaron, Bibu, DGL, kory, Porya<br />
Global Rank: [145](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [103]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  746.6<br />
<br />
Final Rank Value (746.6) = Starting Rank Value (707.4) + Head To Head Adjustments (39.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.4
- 400 + ( ( 0.154 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 707.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     2585 | 2024-08-23 | Insilio       | L   | 0.573      | -            | -                | -                | -         |    -5.16 | Aaron, Bibu, DGL, kory, Porya |
|           21 |     2615 | 2024-08-22 | BIG           | L   | 0.566      | -            | -                | -                | -         |    -0.35 | Aaron, Bibu, DGL, kory, Porya |
|           20 |     2643 | 2024-08-21 | SAW           | L   | 0.561      | -            | -                | -                | -         |    -0.12 | Aaron, Bibu, DGL, kory, Porya |
|           19 |     2674 | 2024-08-21 | Sashi         | W   | 0.560      | 0.143        | 0.053 (0.004)    | 0.675 (0.054)    | 0 (0.000) |    15.29 | Aaron, Bibu, DGL, kory, Porya |
|           18 |     3030 | 2024-08-09 | Sashi         | L   | 0.479      | -            | -                | -                | -         |    -2.04 | Aaron, Bibu, DGL, kory, Porya |
|           17 |     3044 | 2024-08-08 | Permitta      | W   | 0.474      | 0.426        | 0.062 (0.013)    | 1.000 (0.202)    | 0 (0.000) |    14.25 | Aaron, Bibu, DGL, kory, Porya |
|           16 |     3342 | 2024-07-31 | B8            | L   | 0.422      | -            | -                | -                | -         |    -0.54 | Aaron, Bibu, DGL, kory, Porya |
|           15 |     3391 | 2024-07-30 | SovvyKiNG     | W   | 0.415      | 0.500        | 0.000 (0.000)    | 0.315 (0.065)    | 0 (0.000) |     5.10 | Aaron, Bibu, DGL, kory, Porya |
|           14 |     3426 | 2024-07-29 | ARCRED        | L   | 0.408      | -            | -                | -                | -         |    -4.72 | Aaron, Bibu, DGL, kory, Porya |
|           13 |     3751 | 2024-07-19 | Nexus         | L   | 0.341      | -            | -                | -                | -         |    -0.19 | Aaron, Bibu, DGL, kory, Porya |
|           12 |     3784 | 2024-07-18 | Nemiga        | L   | 0.335      | -            | -                | -                | -         |    -0.19 | Aaron, Bibu, DGL, kory, Porya |
|           11 |     3863 | 2024-07-17 | Verdant       | W   | 0.328      | 0.333        | 0.015 (0.002)    | 0.205 (0.022)    | 0 (0.000) |     7.70 | Aaron, Bibu, DGL, kory, Porya |
|           10 |     3919 | 2024-07-16 | Aurora        | L   | 0.322      | -            | -                | -                | -         |    -0.97 | Aaron, Bibu, DGL, kory, Porya |
|            9 |     3970 | 2024-07-15 | Betera        | W   | 0.315      | 0.333        | 0.000 (0.000)    | 0.077 (0.008)    | 0 (0.000) |     3.04 | Aaron, Bibu, DGL, kory, Porya |
|            8 |     4287 | 2024-06-13 | ex-Enterprise | W   | 0.102      | 0.379        | 0.015 (0.001)    | 0.342 (0.013)    | 0 (0.000) |     2.65 | Aaron, Bibu, DGL, kory, Porya |
|            7 |     4323 | 2024-06-12 | Rebels        | W   | 0.095      | 0.379        | 0.036 (0.001)    | 0.433 (0.016)    | 0 (0.000) |     2.25 | Aaron, Bibu, DGL, kory, Porya |
|            6 |     4343 | 2024-06-11 | ECLOT         | W   | 0.088      | 0.379        | 0.187 (0.006)    | 1.000 (0.033)    | 0 (0.000) |     2.75 | Aaron, Bibu, DGL, kory, Porya |
|            5 |     4546 | 2024-06-07 | B8            | L   | 0.061      | -            | -                | -                | -         |    -0.07 | Aaron, Bibu, DGL, kory, Porya |
|            4 |     4550 | 2024-06-07 | Aurora        | L   | 0.060      | -            | -                | -                | -         |    -0.17 | Aaron, Bibu, DGL, kory, Porya |
|            3 |     4650 | 2024-06-05 | The Prodigies | W   | 0.049      | 0.379        | 0.005 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.62 | Aaron, Bibu, DGL, kory, Porya |
|            2 |     4733 | 2024-06-03 | GL Academy    | W   | 0.035      | 0.379        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.17 | Aaron, Bibu, DGL, kory, Porya |
|            1 |     4839 | 2024-05-30 | Rebels        | L   | 0.009      | -            | -                | -                | -         |    -0.07 | Aaron, Bibu, DGL, kory, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,548.81)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.348 | $1,250.00      | $435.05         |
| 2024-06-13 |      0.102 | $10,895.00     | $1,113.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
