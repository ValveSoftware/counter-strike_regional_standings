### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [122](../standings_global.md)<br />
Regional Rank: [81]( ../standings_europe.md)<br />
Final Rank Value:  802.5<br />
<br />
Final Rank Value (802.5) = Starting Rank Value (743.7) + Head To Head Adjustments (58.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.085[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.7
- 400 + ( ( 0.169 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 743.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |     1351 | 2024-05-06 | Gaimin Gladiators | L   | 0.915      | -            | -                | -                | -         |    -2.93 | dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ  |
|           36 |     1407 | 2024-05-03 | Soda              | W   | 0.894      | -            | -                | -                | 0 (0.000) |     2.63 | dennyslaw, Grashog, oxygeN, Rainwaker, SHiPZ  |
|           35 |     1430 | 2024-05-02 | 1WIN              | L   | 0.888      | -            | -                | -                | -         |    -7.19 | dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ |
|           34 |     1501 | 2024-04-29 | Sashi             | L   | 0.867      | -            | -                | -                | -         |    -2.34 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           33 |     1527 | 2024-04-27 | Zero Tenacity     | L   | 0.857      | -            | -                | -                | -         |    -5.62 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           32 |     1798 | 2024-04-18 | Secret            | L   | 0.794      | -            | -                | -                | -         |   -19.43 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           31 |     1824 | 2024-04-17 | esmagaB           | L   | 0.789      | -            | -                | -                | -         |   -15.09 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           30 |     1860 | 2024-04-16 | Passion UA        | W   | 0.783      | 0.384        | 0.086 (0.026)    | 0.803 (0.241)    | 0 (0.000) |    17.00 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           29 |     1945 | 2024-04-11 | PARIVISION        | W   | 0.749      | 0.384        | 0.015 (0.004)    | 0.462 (0.133)    | 0 (0.000) |    16.89 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           28 |     2272 | 2024-04-02 | ex-Guild Eagles   | W   | 0.687      | 0.384        | 0.010 (0.003)    | 0.391 (0.103)    | 0 (0.000) |    14.27 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           27 |     2278 | 2024-04-01 | ex-Guild Eagles   | L   | 0.683      | -            | -                | -                | -         |    -7.33 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           26 |     2353 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.650      | -            | -                | -                | -         |    -0.09 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           25 |     2357 | 2024-03-27 | FORZE             | W   | 0.649      | 0.143        | 0.096 (0.009)    | 0.350 (0.032)    | 0 (0.000) |    16.70 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           24 |     2701 | 2024-03-10 | Young Ninjas      | L   | 0.535      | -            | -                | -                | -         |    -6.97 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           23 |     2774 | 2024-03-07 | Sangal            | W   | 0.515      | 0.143        | 0.216 (0.016)    | 0.884 (0.065)    | 0 (0.000) |    14.06 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           22 |     2850 | 2024-03-05 | Entropiq          | W   | 0.501      | -            | -                | -                | 0 (0.000) |     4.87 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           21 |     2904 | 2024-03-02 | ALTERNATE aTTaX   | W   | 0.482      | 0.358        | 0.046 (0.008)    | 0.573 (0.099)    | 0 (0.000) |    11.98 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           20 |     2998 | 2024-02-26 | Imperial fe       | W   | 0.447      | 0.143        | 0.180 (0.011)    | -                | 0 (0.000) |    12.23 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           19 |     3046 | 2024-02-24 | esmagaB           | W   | 0.435      | 0.358        | -                | 0.176 (0.027)    | 0 (0.000) |     6.83 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           18 |     3186 | 2024-02-18 | Sangal            | L   | 0.394      | -            | -                | -                | -         |    -1.27 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           17 |     3226 | 2024-02-16 | SINNERS           | L   | 0.383      | -            | -                | -                | -         |    -1.54 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           16 |     3236 | 2024-02-16 | B8                | L   | 0.382      | -            | -                | -                | -         |    -1.10 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           15 |     3238 | 2024-02-16 | SINNERS           | W   | 0.382      | 0.143        | 0.045 (0.002)    | 0.782 (0.043)    | -         |    10.56 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           14 |     3366 | 2024-02-10 | Secret            | L   | 0.341      | -            | -                | -                | -         |    -7.83 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           13 |     3409 | 2024-02-06 | ALTERNATE aTTaX   | L   | 0.315      | -            | -                | -                | -         |    -1.73 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           12 |     3428 | 2024-02-04 | Metizport         | W   | 0.303      | 0.358        | 0.073 (0.008)    | 0.587 (0.064)    | -         |     7.61 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           11 |     3441 | 2024-02-04 | Zero Tenacity     | W   | 0.302      | 0.143        | 0.153 (0.007)    | 1.000 (0.043)    | -         |     8.42 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           10 |     3462 | 2024-02-03 | Nexus             | W   | 0.296      | -            | -                | -                | -         |     6.49 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            9 |     3468 | 2024-02-03 | AIRLYA            | L   | 0.295      | -            | -                | -                | -         |    -7.29 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            8 |     3470 | 2024-02-03 | Jake Bube         | W   | 0.295      | -            | -                | -                | -         |     1.21 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            7 |     3569 | 2024-01-30 | fnatic            | L   | 0.269      | -            | -                | -                | -         |    -0.07 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            6 |     3574 | 2024-01-30 | GODSENT           | L   | 0.267      | -            | -                | -                | -         |    -6.70 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            5 |     3916 | 2024-01-17 | Sprout            | L   | 0.184      | -            | -                | -                | -         |    -4.75 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            4 |     3920 | 2024-01-17 | Ninjas in Pyjamas | W   | 0.184      | -            | -                | -                | -         |     2.84 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            3 |     4075 | 2024-01-13 | Gaimin Gladiators | L   | 0.156      | -            | -                | -                | -         |    -0.37 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            2 |     4082 | 2024-01-13 | Space             | W   | 0.155      | -            | -                | -                | -         |     3.17 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            1 |     4119 | 2024-01-12 | NeedDOCTOR        | W   | 0.150      | -            | -                | -                | -         |     0.60 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($444.56)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
