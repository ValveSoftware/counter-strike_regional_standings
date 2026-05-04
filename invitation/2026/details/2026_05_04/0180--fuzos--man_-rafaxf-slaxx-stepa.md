### Roster Details<br />
Team Name: Fuzos<br />
Roster: Mané, rafaxF, Slaxx, Stepa<br />
Global Rank: [180](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [119]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  798.8<br />
<br />
Final Rank Value (798.8) = Starting Rank Value (820.8) + Head To Head Adjustments (-22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.136[<sup>2</sup>](#table1)
- LAN Wins: 0.186[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 820.8
- 400 + ( ( 0.227 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 820.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |     1971 | 2026-03-20 | Dripmen          | L   | 0.899      | -            | -                | -                | -         |   -14.78 | imTOXIC, Mané, rafaxF, Slaxx, Stepa      |
|           44 |     2096 | 2026-03-17 | Bebop            | L   | 0.879      | -            | -                | -                | -         |    -8.75 | imTOXIC, Mané, rafaxF, Slaxx, Stepa      |
|           43 |     2132 | 2026-03-16 | EC BANGA         | W   | 0.874      | 0.384        | 0.003 (0.001)    | -                | 0 (0.000) |    11.56 | imTOXIC, Mané, rafaxF, Slaxx, Stepa      |
|           42 |     2271 | 2026-03-13 | aAa              | L   | 0.853      | -            | -                | -                | -         |    -9.73 | imTOXIC, Mané, rafaxF, Slaxx, Stepa      |
|           41 |     2330 | 2026-03-12 | CSDIILIT         | L   | 0.846      | -            | -                | -                | -         |   -14.20 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           40 |     2556 | 2026-03-08 | WW               | L   | 0.819      | -            | -                | -                | -         |    -4.35 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           39 |     2592 | 2026-03-07 | Lilmix           | W   | 0.814      | 0.384        | 0.006 (0.002)    | 0.516 (0.161)    | 0 (0.000) |    16.49 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           38 |     2752 | 2026-03-04 | Omega            | L   | 0.792      | -            | -                | -                | -         |    -4.95 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           37 |     2787 | 2026-03-03 | megoshort        | L   | 0.787      | -            | -                | -                | -         |    -8.31 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           36 |     2808 | 2026-03-03 | WW               | L   | 0.785      | -            | -                | -                | -         |    -3.38 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           35 |     2842 | 2026-03-02 | Hashiras         | L   | 0.779      | -            | -                | -                | -         |   -13.69 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           34 |     2846 | 2026-03-02 | Eternal Fire     | L   | 0.778      | -            | -                | -                | -         |    -2.93 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           33 |     2872 | 2026-03-01 | Rebels           | L   | 0.773      | -            | -                | -                | -         |    -5.01 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           32 |     2927 | 2026-02-28 | Famalicão        | W   | 0.766      | 0.317        | -                | 0.292 (0.071)    | 1 (0.766) |    12.47 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           31 |     2933 | 2026-02-28 | Lazer Cats       | L   | 0.764      | -            | -                | -                | -         |    -8.66 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           30 |     2969 | 2026-02-27 | HAVU             | L   | 0.759      | -            | -                | -                | -         |    -7.55 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           29 |     3037 | 2026-02-26 | BIG EQUIPA       | W   | 0.752      | 0.384        | 0.030 (0.009)    | -                | 0 (0.000) |     7.23 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           28 |     3054 | 2026-02-26 | Nexus            | W   | 0.751      | 0.371        | -                | 0.332 (0.092)    | 0 (0.000) |    13.84 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           27 |     3127 | 2026-02-24 | EC BANGA         | W   | 0.739      | -            | -                | -                | 0 (0.000) |     1.80 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           26 |     3159 | 2026-02-23 | PsychoFace       | L   | 0.734      | -            | -                | -                | -         |    -6.77 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           25 |     3168 | 2026-02-23 | ex-Zero Tenacity | W   | 0.733      | 0.384        | -                | 0.640 (0.180)    | 0 (0.000) |     6.64 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           24 |     3255 | 2026-02-22 | TNC              | L   | 0.725      | -            | -                | -                | -         |    -4.76 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           23 |     3348 | 2026-02-20 | Omega            | L   | 0.713      | -            | -                | -                | -         |    -5.01 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           22 |     3388 | 2026-02-19 | Lazer Cats       | W   | 0.707      | 0.384        | 0.008 (0.002)    | 0.398 (0.108)    | -         |    13.84 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           21 |     3397 | 2026-02-19 | The Last Resort  | W   | 0.706      | 0.333        | 0.012 (0.003)    | 0.557 (0.131)    | -         |    12.26 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           20 |     3529 | 2026-02-17 | Bushido Wildcats | L   | 0.692      | -            | -                | -                | -         |   -13.95 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           19 |     3546 | 2026-02-16 | ARCRED           | W   | 0.687      | 0.384        | 0.023 (0.006)    | 0.657 (0.173)    | -         |    19.40 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           18 |     3558 | 2026-02-16 | SPARTA           | L   | 0.686      | -            | -                | -                | -         |    -2.66 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           17 |     3602 | 2026-02-15 | illwill          | L   | 0.680      | -            | -                | -                | -         |    -1.74 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           16 |     3614 | 2026-02-15 | Bushido Wildcats | W   | 0.680      | -            | -                | -                | -         |     7.95 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           15 |     3687 | 2026-02-14 | BRUTE            | L   | 0.672      | -            | -                | -                | -         |   -11.55 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           14 |     3718 | 2026-02-13 | Ursa             | W   | 0.667      | 0.384        | 0.026 (0.007)    | 0.956 (0.245)    | -         |    14.80 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           13 |     3733 | 2026-02-13 | ALGO             | L   | 0.666      | -            | -                | -                | -         |    -7.50 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           12 |     3781 | 2026-02-12 | Clutchain fe     | W   | 0.659      | 0.384        | 0.025 (0.006)    | 0.261 (0.066)    | -         |     7.78 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           11 |     3816 | 2026-02-11 | HYPERSPIRIT      | L   | 0.652      | -            | -                | -                | -         |    -5.14 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           10 |     3993 | 2026-02-05 | CSDIILIT         | L   | 0.612      | -            | -                | -                | -         |    -9.87 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            9 |     4006 | 2026-02-04 | SPARTA           | L   | 0.608      | -            | -                | -                | -         |    -1.84 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            8 |     4677 | 2026-01-15 | MANA             | L   | 0.473      | -            | -                | -                | -         |    -5.28 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            7 |     4683 | 2026-01-15 | MOUZ NXT         | L   | 0.473      | -            | -                | -                | -         |    -2.20 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            6 |     4688 | 2026-01-15 | MANA             | W   | 0.472      | 0.341        | 0.003 (0.000)    | 0.827 (0.133)    | 1 (0.472) |     9.76 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            5 |     4883 | 2025-12-21 | BC.Game          | L   | 0.306      | -            | -                | -                | -         |    -1.00 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            4 |     4905 | 2025-12-20 | Rebels           | W   | 0.300      | 0.309        | 0.017 (0.002)    | -                | 1 (0.300) |     8.35 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            3 |     4912 | 2025-12-20 | Flame Hard       | W   | 0.299      | -            | -                | -                | 1 (0.299) |     0.82 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            2 |     4916 | 2025-12-20 | Rebels           | L   | 0.298      | -            | -                | -                | -         |    -1.07 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            1 |     5471 | 2025-11-22 | Sashi            | L   | 0.113      | -            | -                | -                | -         |    -0.33 | Didjey, rafaxF, Slaxx, Sprayy, Stepa     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,804.26)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      0.774 | $500.00        | $387.07         |
| 2026-03-01 |      0.773 | $1,765.00      | $1,364.79       |
| 2025-11-23 |      0.120 | $435.00        | $52.40          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
