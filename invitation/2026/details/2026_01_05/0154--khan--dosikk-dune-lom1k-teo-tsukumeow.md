### Roster Details<br />
Team Name: KHAN<br />
Roster: dosikk, dune, lom1k, tEO, tsukumeow<br />
Global Rank: [154](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [105]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  780.4<br />
<br />
Final Rank Value (780.4) = Starting Rank Value (733.9) + Head To Head Adjustments (46.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.212[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.128[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 733.9
- 400 + ( ( 0.168 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 733.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     2425 | 2025-10-02 | Nexus            | L   | 0.567      | -            | -                | -                | -         |    -2.09 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           35 |     2442 | 2025-10-02 | UNiTY            | L   | 0.565      | -            | -                | -                | -         |    -7.14 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           34 |     2488 | 2025-09-30 | ComeBack         | L   | 0.554      | -            | -                | -                | -         |   -11.31 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           33 |     2503 | 2025-09-30 | Mousquetaires    | W   | 0.553      | 0.303        | 0.029 (0.005)    | 0.432 (0.072)    | 0 (0.000) |    10.96 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           32 |     2543 | 2025-09-29 | BetBoom          | L   | 0.546      | -            | -                | -                | -         |    -0.31 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           31 |     2582 | 2025-09-28 | GUN5             | L   | 0.540      | -            | -                | -                | -         |    -1.12 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           30 |     2623 | 2025-09-27 | QMISTRY          | L   | 0.534      | -            | -                | -                | -         |   -12.28 | ddoni, dosikk, dune, tEO, tsukumeow   |
|           29 |     2642 | 2025-09-27 | RUBY             | W   | 0.533      | 0.435        | 0.046 (0.011)    | 0.962 (0.223)    | 0 (0.000) |    13.53 | ddoni, dosikk, dune, tEO, tsukumeow   |
|           28 |     2682 | 2025-09-26 | AMKAL            | L   | 0.527      | -            | -                | -                | -         |    -6.79 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           27 |     2735 | 2025-09-25 | Johnny Speeds    | W   | 0.520      | 0.435        | 0.020 (0.005)    | 0.885 (0.200)    | 0 (0.000) |    14.96 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           26 |     2772 | 2025-09-24 | FAVBET           | W   | 0.513      | 0.435        | 0.049 (0.011)    | 0.648 (0.144)    | 0 (0.000) |    12.14 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           25 |     2807 | 2025-09-22 | 500              | L   | 0.499      | -            | -                | -                | -         |    -3.13 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           24 |     2827 | 2025-09-21 | Partizan         | L   | 0.493      | -            | -                | -                | -         |    -4.95 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           23 |     2893 | 2025-09-19 | SINNERS          | W   | 0.479      | 0.435        | 0.190 (0.040)    | 0.793 (0.165)    | 0 (0.000) |    13.97 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           22 |     2926 | 2025-09-18 | Mousquetaires    | W   | 0.473      | 0.384        | 0.029 (0.005)    | 0.432 (0.079)    | 0 (0.000) |     9.83 | ddoni, dune, lom1k, tEO, tsukumeow    |
|           21 |     2950 | 2025-09-17 | EYEBALLERS       | W   | 0.468      | 0.384        | 0.103 (0.019)    | 1.000 (0.180)    | 0 (0.000) |    14.37 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           20 |     2965 | 2025-09-17 | UNiTY            | W   | 0.466      | 0.384        | 0.012 (0.002)    | 0.346 (0.062)    | 0 (0.000) |    10.36 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           19 |     2980 | 2025-09-16 | MINLATE          | W   | 0.461      | 0.384        | 0.004 (0.001)    | -                | 0 (0.000) |    11.20 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           18 |     2985 | 2025-09-16 | m1x              | L   | 0.460      | -            | -                | -                | -         |    -9.44 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           17 |     3009 | 2025-09-15 | Wildcard Academy | W   | 0.453      | -            | -                | -                | 0 (0.000) |     3.57 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           16 |     3035 | 2025-09-14 | EYEBALLERS       | L   | 0.448      | -            | -                | -                | -         |    -0.28 | ddoni, dune, lom1k, tEO, tsukumeow    |
|           15 |     3419 | 2025-09-06 | NIP Impact       | L   | 0.391      | -            | -                | -                | -         |    -3.96 | ddoni, dune, lom1k, tEO, tsukumeow    |
|           14 |     3435 | 2025-09-05 | ARCRED           | L   | 0.385      | -            | -                | -                | -         |    -3.57 | ddoni, dosikk, dune, lom1k, tsukumeow |
|           13 |     3460 | 2025-09-03 | The Glecs        | L   | 0.372      | -            | -                | -                | -         |    -8.20 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           12 |     3557 | 2025-08-29 | Eternal Fire     | L   | 0.339      | -            | -                | -                | -         |    -3.86 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           11 |     3564 | 2025-08-29 | 33               | L   | 0.338      | -            | -                | -                | -         |    -1.94 | dosikk, dune, lom1k, tEO, tsukumeow   |
|           10 |     3620 | 2025-08-27 | CYBERSHOKE       | L   | 0.326      | -            | -                | -                | -         |    -0.31 | dosikk, dune, lom1k, tEO, tsukumeow   |
|            9 |     3659 | 2025-08-25 | The Glecs        | W   | 0.312      | -            | -                | -                | -         |     2.81 | dune, lom1k, m1te, tEO, tsukumeow     |
|            8 |     3669 | 2025-08-24 | SENZA            | W   | 0.307      | -            | -                | -                | -         |     3.83 | ddoni, dosikk, lom1k, tEO, tsukumeow  |
|            7 |     3729 | 2025-08-21 | RUBY             | L   | 0.285      | -            | -                | -                | -         |    -1.83 | dosikk, dune, lom1k, tEO, tsukumeow   |
|            6 |     3785 | 2025-08-18 | Oramond          | L   | 0.266      | -            | -                | -                | -         |    -1.29 | dosikk, dune, lom1k, tEO, tsukumeow   |
|            5 |     3813 | 2025-08-17 | CPH Wolves       | W   | 0.261      | 0.384        | -                | 0.816 (0.082)    | -         |     5.40 | dosikk, dune, lom1k, tEO, tsukumeow   |
|            4 |     3868 | 2025-08-16 | 1win             | W   | 0.251      | 0.384        | 0.027 (0.003)    | 0.791 (0.076)    | -         |     5.66 | dosikk, dune, lom1k, tEO, tsukumeow   |
|            3 |     3909 | 2025-08-15 | CPH Wolves       | L   | 0.246      | -            | -                | -                | -         |    -2.59 | dosikk, dune, lom1k, tEO, tsukumeow   |
|            2 |     4673 | 2025-07-12 | PARIVISION       | L   | 0.019      | -            | -                | -                | -         |    -0.01 | ddoni, dosikk, dune, m1te, tsukumeow  |
|            1 |     4714 | 2025-07-11 | 9INE             | W   | 0.011      | -            | -                | -                | -         |     0.35 | ddoni, dosikk, dune, m1te, tsukumeow  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($81.82)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-13 |      0.028 | $2,930.00      | $81.82          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
