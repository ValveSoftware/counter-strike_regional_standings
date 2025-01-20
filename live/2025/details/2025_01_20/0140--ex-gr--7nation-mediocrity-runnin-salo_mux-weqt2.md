### Roster Details<br />
Team Name: ex-GR<br />
Roster: 7nation, mediocrity, Runnin, SALO_MUX, weqt2<br />
Global Rank: [140](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [102]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  738.4<br />
<br />
Final Rank Value (738.4) = Starting Rank Value (747.6) + Head To Head Adjustments (-9.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 747.6
- 400 + ( ( 0.175 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 747.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |      399 | 2024-12-05 | Chinggis Warriors | L   | 0.897      | -            | -                | -                | -         |   -10.37 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|           20 |      408 | 2024-12-04 | CatEvil           | L   | 0.896      | -            | -                | -                | -         |   -20.31 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|           19 |      691 | 2024-11-21 | The Huns          | L   | 0.803      | -            | -                | -                | -         |    -6.29 | mediocrity, Runnin, SALO_MUX, Sange, weqt2       |
|           18 |      698 | 2024-11-20 | SGGT              | L   | 0.802      | -            | -                | -                | -         |   -15.23 | dukefissura, mediocrity, Runnin, SALO_MUX, weqt2 |
|           17 |      924 | 2024-11-11 | FlyQuest          | L   | 0.742      | -            | -                | -                | -         |    -1.22 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|           16 |      949 | 2024-11-11 | Rare Atom         | L   | 0.737      | -            | -                | -                | -         |    -6.17 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|           15 |     1000 | 2024-11-08 | IHC               | W   | 0.717      | 0.333        | 0.008 (0.002)    | 0.108 (0.026)    | 0 (0.000) |     8.81 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|           14 |     1004 | 2024-11-08 | Chinggis Warriors | W   | 0.716      | 0.333        | 0.039 (0.009)    | 0.312 (0.074)    | 0 (0.000) |    14.69 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|           13 |     1057 | 2024-11-05 | IHC               | W   | 0.696      | 0.333        | 0.008 (0.002)    | 0.108 (0.025)    | 0 (0.000) |     8.71 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|           12 |     1059 | 2024-11-04 | Chinggis Warriors | W   | 0.695      | 0.333        | 0.039 (0.009)    | 0.312 (0.072)    | 0 (0.000) |    15.24 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|           11 |     1456 | 2024-10-16 | Chinggis Warriors | L   | 0.565      | -            | -                | -                | -         |    -5.18 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2    |
|           10 |     1482 | 2024-10-15 | -72c              | W   | 0.558      | 0.143        | 0.002 (0.000)    | 0.023 (0.002)    | 0 (0.000) |     4.03 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2    |
|            9 |     2319 | 2024-09-18 | EYEBALLERS        | L   | 0.378      | -            | -                | -                | -         |    -4.82 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            8 |     2346 | 2024-09-17 | WW                | L   | 0.372      | -            | -                | -                | -         |    -9.29 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            7 |     2847 | 2024-08-30 | ATOX              | W   | 0.251      | 0.143        | 0.128 (0.005)    | 0.460 (0.017)    | 0 (0.000) |     7.31 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            6 |     2906 | 2024-08-29 | Chinggis Warriors | W   | 0.243      | 0.143        | 0.002 (0.000)    | 0.042 (0.001)    | 0 (0.000) |     3.20 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            5 |     2959 | 2024-08-28 | ATOX              | W   | 0.237      | 0.143        | 0.128 (0.004)    | 0.460 (0.016)    | 0 (0.000) |     6.93 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            4 |     2967 | 2024-08-28 | -72c              | W   | 0.236      | 0.143        | 0.002 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     1.75 | 7nation, mediocrity, Runnin, SALO_MUX, weqt2     |
|            3 |     4037 | 2024-07-29 | Bromo             | L   | 0.037      | -            | -                | -                | -         |    -0.68 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2    |
|            2 |     4065 | 2024-07-28 | AY                | W   | 0.031      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.12 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2    |
|            1 |     4111 | 2024-07-26 | NomadS            | L   | 0.018      | -            | -                | -                | -         |    -0.45 | 7nation, mediocrity, Overdue, SALO_MUX, weqt2    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,129.73)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-08 |      0.717 | $7,500.00      | $5,378.91       |
| 2024-10-18 |      0.578 | $1,300.00      | $750.82         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
