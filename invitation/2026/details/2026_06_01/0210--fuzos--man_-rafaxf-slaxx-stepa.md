### Roster Details<br />
Team Name: Fuzos<br />
Roster: Mané, rafaxF, Slaxx, Stepa<br />
Global Rank: [210](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [135]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  733.5<br />
<br />
Final Rank Value (733.5) = Starting Rank Value (748.2) + Head To Head Adjustments (-14.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.088[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 748.2
- 400 + ( ( 0.183 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 748.2


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
|           44 |     2957 | 2026-03-20 | Dripmen          | L   | 0.713      | -            | -                | -                | -         |   -11.21 | imTOXIC, Mané, rafaxF, Slaxx, Stepa      |
|           43 |     3082 | 2026-03-17 | Bebop            | L   | 0.693      | -            | -                | -                | -         |    -6.07 | imTOXIC, Mané, rafaxF, Slaxx, Stepa      |
|           42 |     3118 | 2026-03-16 | EC BANGA         | W   | 0.687      | -            | -                | -                | 0 (0.000) |     2.67 | imTOXIC, Mané, rafaxF, Slaxx, Stepa      |
|           41 |     3257 | 2026-03-13 | aAa              | L   | 0.667      | -            | -                | -                | -         |    -6.66 | imTOXIC, Mané, rafaxF, Slaxx, Stepa      |
|           40 |     3316 | 2026-03-12 | cirahvi          | L   | 0.659      | -            | -                | -                | -         |    -9.74 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           39 |     3542 | 2026-03-08 | WW               | L   | 0.633      | -            | -                | -                | -         |    -2.20 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           38 |     3578 | 2026-03-07 | Lilmix           | W   | 0.627      | 0.384        | 0.004 (0.001)    | -                | 0 (0.000) |    10.68 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           37 |     3738 | 2026-03-04 | Omega            | L   | 0.605      | -            | -                | -                | -         |    -2.29 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           36 |     3773 | 2026-03-03 | megoshort        | L   | 0.600      | -            | -                | -                | -         |    -6.07 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           35 |     3794 | 2026-03-03 | WW               | L   | 0.598      | -            | -                | -                | -         |    -1.76 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           34 |     3828 | 2026-03-02 | Hashiras         | L   | 0.592      | -            | -                | -                | -         |    -9.03 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           33 |     3832 | 2026-03-02 | Eternal Fire     | L   | 0.592      | -            | -                | -                | -         |    -1.70 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           32 |     3858 | 2026-03-01 | Rebels           | L   | 0.587      | -            | -                | -                | -         |    -1.97 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           31 |     3913 | 2026-02-28 | Famalicão        | W   | 0.579      | 0.317        | 0.001 (0.000)    | 0.277 (0.051)    | 1 (0.579) |    10.02 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           30 |     3919 | 2026-02-28 | Lazer Cats       | L   | 0.578      | -            | -                | -                | -         |    -6.09 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           29 |     3955 | 2026-02-27 | HAVU             | L   | 0.573      | -            | -                | -                | -         |    -4.39 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           28 |     4023 | 2026-02-26 | BIG EQUIPA       | W   | 0.566      | 0.384        | 0.002 (0.000)    | -                | 0 (0.000) |     5.15 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           27 |     4040 | 2026-02-26 | Nexus            | W   | 0.564      | 0.371        | -                | 0.219 (0.046)    | 0 (0.000) |     9.08 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           26 |     4113 | 2026-02-24 | EC BANGA         | W   | 0.553      | -            | -                | -                | 0 (0.000) |     2.04 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           25 |     4145 | 2026-02-23 | PsychoFace       | L   | 0.548      | -            | -                | -                | -         |    -2.89 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           24 |     4154 | 2026-02-23 | ex-Zero Tenacity | W   | 0.546      | 0.384        | -                | 0.815 (0.171)    | 0 (0.000) |     7.09 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           23 |     4241 | 2026-02-22 | TNC              | L   | 0.539      | -            | -                | -                | -         |    -9.84 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           22 |     4334 | 2026-02-20 | Omega            | L   | 0.526      | -            | -                | -                | -         |    -1.93 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           21 |     4374 | 2026-02-19 | Lazer Cats       | W   | 0.521      | 0.384        | 0.005 (0.001)    | 0.350 (0.070)    | -         |    10.69 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           20 |     4383 | 2026-02-19 | The Last Resort  | W   | 0.520      | 0.333        | 0.006 (0.001)    | 0.565 (0.098)    | -         |    10.35 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           19 |     4515 | 2026-02-17 | Bushido Wildcats | L   | 0.505      | -            | -                | -                | -         |   -11.30 | Mané, Pedrinho2011, rafaxF, Slaxx, Stepa |
|           18 |     4532 | 2026-02-16 | ARCRED           | W   | 0.501      | 0.384        | 0.025 (0.005)    | 0.586 (0.113)    | -         |    14.79 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           17 |     4544 | 2026-02-16 | SPARTA           | L   | 0.500      | -            | -                | -                | -         |    -1.35 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           16 |     4588 | 2026-02-15 | illwill          | L   | 0.494      | -            | -                | -                | -         |    -1.53 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           15 |     4600 | 2026-02-15 | Bushido Wildcats | W   | 0.493      | 0.384        | -                | 0.271 (0.051)    | -         |     4.58 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           14 |     4673 | 2026-02-14 | BRUTE            | L   | 0.486      | -            | -                | -                | -         |    -5.94 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           13 |     4704 | 2026-02-13 | Ursa             | W   | 0.480      | 0.384        | 0.016 (0.003)    | 0.962 (0.178)    | -         |    11.26 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           12 |     4719 | 2026-02-13 | ALGO             | L   | 0.479      | -            | -                | -                | -         |    -7.87 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           11 |     4767 | 2026-02-12 | Clutchain fe     | W   | 0.472      | 0.384        | 0.012 (0.002)    | 0.193 (0.035)    | -         |     6.14 | Mané, pr, rafaxF, Slaxx, Stepa           |
|           10 |     4802 | 2026-02-11 | HYPERSPIRIT      | L   | 0.465      | -            | -                | -                | -         |    -3.24 | Mané, pr, rafaxF, Slaxx, Stepa           |
|            9 |     4979 | 2026-02-05 | cirahvi          | L   | 0.426      | -            | -                | -                | -         |    -6.29 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            8 |     4992 | 2026-02-04 | SPARTA           | L   | 0.422      | -            | -                | -                | -         |    -0.97 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            7 |     5663 | 2026-01-15 | MANA             | L   | 0.287      | -            | -                | -                | -         |    -2.98 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            6 |     5669 | 2026-01-15 | MOUZ NXT         | L   | 0.286      | -            | -                | -                | -         |    -1.27 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            5 |     5674 | 2026-01-15 | MANA             | W   | 0.285      | 0.341        | 0.002 (0.000)    | 0.712 (0.069)    | 1 (0.285) |     6.10 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            4 |     5869 | 2025-12-21 | SAW              | L   | 0.119      | -            | -                | -                | -         |    -2.40 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            3 |     5891 | 2025-12-20 | Rebels           | W   | 0.113      | 0.309        | 0.011 (0.000)    | -                | 1 (0.113) |     3.35 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            2 |     5898 | 2025-12-20 | Flame Hard       | W   | 0.113      | -            | -                | -                | 1 (0.113) |     0.44 | pr, rafaxF, Slaxx, Sprayy, Stepa         |
|            1 |     5902 | 2025-12-20 | Rebels           | L   | 0.112      | -            | -                | -                | -         |    -0.22 | pr, rafaxF, Slaxx, Sprayy, Stepa         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,329.28)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      0.588 | $500.00        | $293.79         |
| 2026-03-01 |      0.587 | $1,765.00      | $1,035.49       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
