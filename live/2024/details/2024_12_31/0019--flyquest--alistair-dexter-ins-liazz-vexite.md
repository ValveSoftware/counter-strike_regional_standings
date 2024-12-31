### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, dexter, INS, Liazz, Vexite<br />
Global Rank: [19](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2024_12_31.md)<br />
Regional Rank: [2]( ../../standings_asia_2024_12_31.md)<br />
<br />
Final Rank Value:  1331.2<br />
<br />
Final Rank Value (1331.2) = Starting Rank Value (1316.6) + Head To Head Adjustments (14.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.563[<sup>1</sup>](#table2)
- Bounty Collected: 0.397[<sup>2</sup>](#table1)
- Opponent Network: 0.100[<sup>2</sup>](#table1)
- LAN Wins: 0.822[<sup>2</sup>](#table1)

The average of these factors is 0.470<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1316.6
- 400 + ( ( 0.470 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1316.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      379 | 2024-12-02 | MIBR           | L   | 1.000      | -            | -                | -                | -         |   -13.71 | aliStair, dexter, INS, Liazz, Vexite |
|           38 |      398 | 2024-12-02 | paiN           | L   | 1.000      | -            | -                | -                | -         |   -11.41 | aliStair, dexter, INS, Liazz, Vexite |
|           37 |      417 | 2024-11-30 | Liquid         | L   | 1.000      | -            | -                | -                | -         |    -5.63 | aliStair, dexter, INS, Liazz, Vexite |
|           36 |      447 | 2024-11-30 | BIG            | W   | 1.000      | 0.143        | 0.230 (0.033)    | 0.504 (0.072)    | 1 (1.000) |    16.44 | aliStair, dexter, INS, Liazz, Vexite |
|           35 |      454 | 2024-11-29 | Complexity     | W   | 1.000      | 0.143        | 0.126 (0.018)    | 0.330 (0.047)    | 1 (1.000) |    18.52 | aliStair, dexter, INS, Liazz, Vexite |
|           34 |      809 | 2024-11-13 | Lynn Vision    | W   | 0.891      | 0.143        | 0.031 (0.004)    | -                | 1 (0.891) |     3.06 | aliStair, dexter, INS, Liazz, Vexite |
|           33 |      819 | 2024-11-12 | DRILLAS        | W   | 0.890      | -            | -                | -                | 1 (0.890) |     2.30 | aliStair, dexter, INS, Liazz, Vexite |
|           32 |      855 | 2024-11-11 | ex-GR          | W   | 0.883      | 0.143        | 0.025 (0.003)    | -                | 1 (0.883) |     1.36 | aliStair, dexter, INS, Liazz, Vexite |
|           31 |      874 | 2024-11-11 | TALON          | L   | 0.878      | -            | -                | -                | -         |   -27.13 | aliStair, dexter, INS, Liazz, Vexite |
|           30 |     1284 | 2024-10-20 | Mindfreak      | W   | 0.730      | 0.333        | -                | 0.188 (0.046)    | -         |     0.69 | aliStair, dexter, INS, Liazz, Vexite |
|           29 |     1338 | 2024-10-18 | Mindfreak      | W   | 0.717      | -            | -                | -                | -         |     0.65 | aliStair, dexter, INS, Liazz, Vexite |
|           28 |     1581 | 2024-10-06 | BIG            | W   | 0.641      | 0.500        | 0.230 (0.074)    | 0.504 (0.162)    | 1 (0.641) |    11.11 | aliStair, dexter, INS, Liazz, Vexite |
|           27 |     1593 | 2024-10-06 | Wildcard       | W   | 0.639      | 0.500        | 0.124 (0.040)    | 0.546 (0.175)    | 1 (0.639) |     8.53 | aliStair, dexter, INS, Liazz, Vexite |
|           26 |     1654 | 2024-10-04 | SAW            | W   | 0.627      | 0.500        | 0.260 (0.081)    | 0.532 (0.167)    | 1 (0.627) |    12.75 | aliStair, dexter, INS, Liazz, Vexite |
|           25 |     1666 | 2024-10-04 | BetBoom        | W   | 0.625      | 0.500        | 0.110 (0.034)    | 0.468 (0.146)    | 1 (0.625) |     5.79 | aliStair, dexter, INS, Liazz, Vexite |
|           24 |     1820 | 2024-09-30 | Rooster        | W   | 0.598      | 0.333        | 0.012 (0.002)    | -                | -         |     0.63 | aliStair, dexter, INS, Liazz, Vexite |
|           23 |     1823 | 2024-09-30 | Rooster        | W   | 0.597      | -            | -                | -                | -         |     0.63 | aliStair, dexter, INS, Liazz, Vexite |
|           22 |     1931 | 2024-09-27 | The Art of War | W   | 0.577      | 0.333        | -                | 0.238 (0.046)    | -         |     0.50 | aliStair, dexter, INS, Liazz, Vexite |
|           21 |     1934 | 2024-09-27 | The Art of War | W   | 0.577      | 0.333        | -                | 0.238 (0.046)    | -         |     0.51 | aliStair, dexter, INS, Liazz, Vexite |
|           20 |     1977 | 2024-09-26 | Housebets      | W   | 0.571      | -            | -                | -                | -         |     0.41 | aliStair, dexter, INS, Liazz, Vexite |
|           19 |     1981 | 2024-09-26 | Housebets      | W   | 0.571      | -            | -                | -                | -         |     0.41 | aliStair, dexter, INS, Liazz, Vexite |
|           18 |     2033 | 2024-09-25 | Arcade         | W   | 0.564      | -            | -                | -                | -         |     0.38 | aliStair, dexter, INS, Liazz, Vexite |
|           17 |     2037 | 2024-09-25 | Arcade         | W   | 0.564      | -            | -                | -                | -         |     0.38 | aliStair, dexter, INS, Liazz, Vexite |
|           16 |     2568 | 2024-09-07 | Sangal         | L   | 0.445      | -            | -                | -                | -         |    -7.58 | aliStair, dexter, INS, Liazz, Vexite |
|           15 |     2586 | 2024-09-06 | Lynn Vision    | W   | 0.440      | 0.889        | 0.031 (0.012)    | 0.233 (0.091)    | 1 (0.440) |     1.80 | aliStair, dexter, INS, Liazz, Vexite |
|           14 |     2661 | 2024-09-04 | FaZe           | L   | 0.426      | -            | -                | -                | -         |    -0.61 | aliStair, dexter, INS, Liazz, Vexite |
|           13 |     2703 | 2024-09-03 | Eternal Fire   | L   | 0.418      | -            | -                | -                | -         |    -3.99 | aliStair, dexter, INS, Liazz, Vexite |
|           12 |     2788 | 2024-08-30 | Vantage        | W   | 0.391      | -            | -                | -                | -         |     0.14 | aliStair, dexter, INS, Liazz, Vexite |
|           11 |     2790 | 2024-08-30 | Vantage        | W   | 0.391      | -            | -                | -                | -         |     0.14 | aliStair, dexter, INS, Liazz, Vexite |
|           10 |     3019 | 2024-08-26 | MANTRA         | W   | 0.364      | -            | -                | -                | -         |     0.23 | aliStair, dexter, INS, Liazz, Vexite |
|            9 |     3029 | 2024-08-26 | MANTRA         | W   | 0.364      | -            | -                | -                | -         |     0.23 | aliStair, dexter, INS, Liazz, Vexite |
|            8 |     3212 | 2024-08-21 | KZG            | W   | 0.331      | -            | -                | -                | -         |     0.25 | aliStair, dexter, INS, Liazz, Vexite |
|            7 |     3219 | 2024-08-21 | KZG            | W   | 0.331      | -            | -                | -                | -         |     0.25 | aliStair, dexter, INS, Liazz, Vexite |
|            6 |     3435 | 2024-08-13 | DXA            | W   | 0.278      | -            | -                | -                | -         |     0.18 | aliStair, dexter, INS, Liazz, Vexite |
|            5 |     3443 | 2024-08-13 | DXA            | W   | 0.277      | -            | -                | -                | -         |     0.18 | aliStair, dexter, INS, Liazz, Vexite |
|            4 |     3578 | 2024-08-08 | The MongolZ    | L   | 0.245      | -            | -                | -                | -         |    -0.32 | aliStair, dexter, INS, Liazz, Vexite |
|            3 |     3626 | 2024-08-07 | BIG            | L   | 0.238      | -            | -                | -                | -         |    -2.73 | aliStair, dexter, INS, Liazz, Vexite |
|            2 |     4336 | 2024-07-18 | FURIA          | L   | 0.104      | -            | -                | -                | -         |    -0.55 | aliStair, dexter, INS, Liazz, Vexite |
|            1 |     4402 | 2024-07-17 | FaZe           | L   | 0.099      | -            | -                | -                | -         |    -0.13 | aliStair, dexter, INS, Liazz, Vexite |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($50,176.80)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-03 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-10-20 |      0.730 | $3,250.00      | $2,372.71       |
| 2024-10-06 |      0.641 | $50,000.00     | $32,068.83      |
| 2024-09-22 |      0.547 | $7,000.00      | $3,829.21       |
| 2024-08-09 |      0.254 | $2,500.00      | $634.59         |
| 2024-07-21 |      0.127 | $10,000.00     | $1,271.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
