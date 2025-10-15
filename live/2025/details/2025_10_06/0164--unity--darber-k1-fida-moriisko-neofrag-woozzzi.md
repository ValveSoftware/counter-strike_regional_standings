### Roster Details<br />
Team Name: UNiTY<br />
Roster: darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi<br />
Global Rank: [164](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [100]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  677.3<br />
<br />
Final Rank Value (677.3) = Starting Rank Value (742.3) + Head To Head Adjustments (-65.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.103[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 742.3
- 400 + ( ( 0.175 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 742.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |       48 | 2025-10-03 | kONO             | L   | 1.000      | -            | -                | -                | -         |   -10.13 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           36 |       69 | 2025-10-02 | KHAN             | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.705 (0.101)    | 0 (0.000) |    21.08 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi  |
|           35 |      161 | 2025-09-28 | BRUTE            | L   | 1.000      | -            | -                | -                | -         |   -22.39 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           34 |      186 | 2025-09-28 | 1win             | L   | 1.000      | -            | -                | -                | -         |    -7.82 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           33 |      230 | 2025-09-27 | ECLOT            | L   | 1.000      | -            | -                | -                | -         |    -5.39 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           32 |      309 | 2025-09-25 | Leo              | L   | 1.000      | -            | -                | -                | -         |   -18.15 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           31 |      330 | 2025-09-24 | Dark Tigers      | W   | 1.000      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     4.50 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           30 |      340 | 2025-09-24 | NIP Impact       | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.065 (0.009)    | 0 (0.000) |    12.09 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           29 |      500 | 2025-09-17 | KHAN             | L   | 1.000      | -            | -                | -                | -         |   -13.82 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           28 |      525 | 2025-09-16 | Wildcard Academy | W   | 1.000      | 0.384        | -                | 0.088 (0.034)    | 0 (0.000) |     7.85 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           27 |      537 | 2025-09-15 | m1x              | L   | 1.000      | -            | -                | -                | -         |   -13.95 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           26 |      587 | 2025-09-14 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |    -5.78 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           25 |      621 | 2025-09-13 | ECLOT            | L   | 1.000      | -            | -                | -                | -         |    -8.54 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           24 |      677 | 2025-09-12 | GLORE            | W   | 1.000      | 0.327        | 0.001 (0.000)    | -                | 1 (1.000) |     7.35 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           23 |     1343 | 2025-08-17 | VP.Prodigy       | L   | 0.866      | -            | -                | -                | -         |    -4.86 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           22 |     1473 | 2025-08-14 | SKYFURY          | W   | 0.846      | 0.278        | -                | 0.035 (0.008)    | 0 (0.000) |     7.07 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           21 |     1580 | 2025-08-12 | MOUZ NXT         | W   | 0.833      | 0.278        | -                | 0.083 (0.019)    | 0 (0.000) |    10.93 | darber, K1-FiDa, MoriiSko, NEOFRAG, woozzzi |
|           20 |     2450 | 2025-06-19 | FAVBET           | L   | 0.474      | -            | -                | -                | -         |    -3.40 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|           19 |     2470 | 2025-06-18 | RUBY             | W   | 0.466      | 0.435        | 0.022 (0.004)    | 1.000 (0.202)    | 0 (0.000) |    11.21 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|           18 |     2523 | 2025-06-15 | NOVAQ            | L   | 0.446      | -            | -                | -                | -         |    -3.40 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|           17 |     2588 | 2025-06-13 | CPH Wolves       | L   | 0.434      | -            | -                | -                | -         |    -4.16 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|           16 |     2614 | 2025-06-12 | Y5               | W   | 0.427      | 0.435        | 0.006 (0.001)    | 0.342 (0.064)    | 0 (0.000) |     6.49 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|           15 |     2711 | 2025-06-07 | Preasy           | L   | 0.392      | -            | -                | -                | -         |    -9.17 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|           14 |     2719 | 2025-06-06 | Leo              | L   | 0.387      | -            | -                | -                | -         |    -8.51 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|           13 |     2791 | 2025-05-30 | Fisher College   | W   | 0.339      | 0.384        | 0.000 (0.000)    | 0.053 (0.007)    | 0 (0.000) |     3.37 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|           12 |     2810 | 2025-05-28 | BIG EQUIPA       | W   | 0.326      | 0.384        | 0.000 (0.000)    | -                | -         |     2.96 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|           11 |     2834 | 2025-05-26 | MANA             | L   | 0.312      | -            | -                | -                | -         |    -6.79 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|           10 |     2988 | 2025-05-18 | ex-Permitta      | L   | 0.260      | -            | -                | -                | -         |    -6.39 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            9 |     3013 | 2025-05-17 | Fisher College   | W   | 0.252      | 0.384        | 0.000 (0.000)    | 0.053 (0.005)    | -         |     2.46 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            8 |     3030 | 2025-05-16 | ex-Permitta      | L   | 0.246      | -            | -                | -                | -         |    -6.12 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            7 |     3283 | 2025-05-07 | Fire Flux        | L   | 0.185      | -            | -                | -                | -         |    -3.00 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            6 |     3314 | 2025-05-06 | Sashi            | L   | 0.179      | -            | -                | -                | -         |    -1.33 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            5 |     3352 | 2025-05-04 | Zero Tenacity    | L   | 0.167      | -            | -                | -                | -         |    -0.60 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            4 |     3392 | 2025-05-03 | JANO             | W   | 0.158      | 0.384        | -                | 0.019 (0.001)    | -         |     1.06 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            3 |     3410 | 2025-05-02 | Zero Tenacity    | L   | 0.152      | -            | -                | -                | -         |    -0.54 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            2 |     3469 | 2025-04-30 | LA MASIA         | W   | 0.138      | 0.344        | 0.002 (0.000)    | -                | -         |     1.44 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |
|            1 |     3505 | 2025-04-28 | ECLOT            | L   | 0.125      | -            | -                | -                | -         |    -0.67 | darber, K1-FiDa, NEOFRAG, PerdY, woozzzi    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,831.83)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-14 |      1.000 | $1,182.00      | $1,182.00       |
| 2025-08-17 |      0.866 | $750.00        | $649.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
