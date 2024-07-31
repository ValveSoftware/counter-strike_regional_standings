### Roster Details<br />
Team Name: Rhyno<br />
Roster: Ag1l, DDias, krazy, snapy, TMKj<br />
Global Rank: [62](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [44]( ../standings_europe.md)<br />
<br />
Final Rank Value:  986.8<br />
<br />
Final Rank Value (986.8) = Starting Rank Value (980.5) + Head To Head Adjustments (6.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.467[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.151[<sup>2</sup>](#table1)
- LAN Wins: 0.174[<sup>2</sup>](#table1)

The average of these factors is 0.281<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 980.5
- 400 + ( ( 0.281 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 980.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |       73 | 2024-07-30 | Enterprise    | L   | 1.000      | -            | -                | -                | -         |   -18.34 | Ag1l, DDias, krazy, snapy, TMKj        |
|           25 |      288 | 2024-07-23 | FAVBET        | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.344 (0.049)    | 0 (0.000) |     9.74 | Ag1l, DDias, krazy, snapy, TMKj        |
|           24 |      394 | 2024-07-19 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -12.24 | Ag1l, DDias, krazy, snapy, TMKj        |
|           23 |      467 | 2024-07-18 | Nexus         | W   | 1.000      | 0.500        | 0.014 (0.007)    | 0.465 (0.233)    | 0 (0.000) |     5.99 | Ag1l, DDias, krazy, snapy, TMKj        |
|           22 |      541 | 2024-07-17 | HAVU          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.52 | Ag1l, DDias, krazy, snapy, TMKj        |
|           21 |      593 | 2024-07-16 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -12.73 | Ag1l, DDias, krazy, snapy, TMKj        |
|           20 |     1010 | 2024-06-11 | Nemiga        | L   | 0.865      | -            | -                | -                | -         |    -8.17 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           19 |     1032 | 2024-06-10 | CYBERSHOKE    | W   | 0.859      | 0.500        | 0.040 (0.017)    | 0.347 (0.149)    | 0 (0.000) |     8.93 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           18 |     1063 | 2024-06-09 | Rebels        | W   | 0.853      | 0.500        | 0.041 (0.017)    | 0.596 (0.254)    | 0 (0.000) |    14.76 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           17 |     1157 | 2024-06-08 | NAVI Junior   | W   | 0.845      | 0.500        | -                | 0.091 (0.038)    | 0 (0.000) |     2.45 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |     1249 | 2024-06-06 | MOUZ NXT      | L   | 0.833      | -            | -                | -                | -         |    -8.92 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |     1360 | 2024-06-04 | Endpoint      | W   | 0.820      | 0.500        | 0.012 (0.005)    | 0.523 (0.214)    | 0 (0.000) |     9.84 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |     1559 | 2024-05-28 | Sampi         | L   | 0.771      | -            | -                | -                | -         |   -15.08 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |     1582 | 2024-05-27 | Endpoint      | W   | 0.765      | 0.435        | 0.012 (0.004)    | 0.523 (0.174)    | -         |     9.32 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     1624 | 2024-05-25 | Zero Tenacity | L   | 0.750      | -            | -                | -                | -         |    -8.63 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     1690 | 2024-05-22 | MOUZ NXT      | W   | 0.732      | 0.435        | 0.141 (0.045)    | 1.000 (0.318)    | -         |    12.81 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     1727 | 2024-05-21 | B8            | L   | 0.726      | -            | -                | -                | -         |    -6.69 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     1834 | 2024-05-18 | LEON          | W   | 0.704      | 0.143        | 0.007 (0.001)    | -                | -         |     3.54 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     1890 | 2024-05-16 | CPH Wolves    | W   | 0.692      | 0.143        | -                | 0.358 (0.035)    | -         |     5.34 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     1949 | 2024-05-15 | EYEBALLERS    | W   | 0.684      | 0.143        | 0.006 (0.001)    | 0.513 (0.050)    | -         |     8.02 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            6 |     2049 | 2024-05-12 | AL QATRAO     | W   | 0.665      | 0.306        | 0.004 (0.001)    | -                | 1 (0.665) |     3.60 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            5 |     2087 | 2024-05-11 | ALL-IN        | W   | 0.657      | -            | -                | -                | 1 (0.657) |     1.57 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            4 |     3706 | 2024-03-03 | Portugal      | L   | 0.199      | -            | -                | -                | -         |    -5.24 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            3 |     3733 | 2024-03-02 | AL QATRAO     | W   | 0.192      | -            | -                | -                | 1 (0.192) |     1.00 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            2 |     4264 | 2024-02-04 | SAW           | L   | 0.012      | -            | -                | -                | -         |    -0.09 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            1 |     4286 | 2024-02-03 | Portugal      | W   | 0.006      | -            | -                | -                | -         |     0.03 | DDias, krazy, renatoohaxx, snapy, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,750.59)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      0.865 | $25,000.00     | $21,634.55      |
| 2024-05-12 |      0.665 | $2,693.00      | $1,791.93       |
| 2024-03-03 |      0.199 | $1,625.00      | $324.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
