### Roster Details<br />
Team Name: Revenge Nation<br />
Roster: Evan, MagiC, MERL, NIGHT666LADE, TABEN<br />
Global Rank: [149](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [105]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  722.8<br />
<br />
Final Rank Value (722.8) = Starting Rank Value (701.3) + Head To Head Adjustments (21.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 701.3
- 400 + ( ( 0.157 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 701.3


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
|           38 |      466 | 2024-11-23 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -2.53 | Evan, MagiC, MERL, NIGHT666LADE, TABEN      |
|           37 |     1403 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.736      | 0.477        | 0.014 (0.005)    | 0.476 (0.167)    | 0 (0.000) |    17.45 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           36 |     1408 | 2024-10-09 | FLUFFY AIMERS    | W   | 0.735      | 0.477        | 0.014 (0.005)    | 0.476 (0.167)    | 0 (0.000) |    18.27 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           35 |     1438 | 2024-10-08 | Party Astronauts | L   | 0.729      | -            | -                | -                | -         |    -4.53 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           34 |     1443 | 2024-10-08 | Party Astronauts | L   | 0.729      | -            | -                | -                | -         |    -4.72 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           33 |     1473 | 2024-10-07 | E-Xolos LAZER    | L   | 0.722      | -            | -                | -                | -         |   -10.01 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           32 |     1475 | 2024-10-07 | E-Xolos LAZER    | W   | 0.722      | 0.477        | 0.007 (0.002)    | 0.247 (0.085)    | 0 (0.000) |    13.04 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           31 |     1596 | 2024-10-03 | LAG              | W   | 0.696      | 0.477        | 0.003 (0.001)    | 0.141 (0.047)    | 0 (0.000) |     8.75 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           30 |     1600 | 2024-10-03 | LAG              | W   | 0.695      | 0.477        | 0.003 (0.001)    | 0.141 (0.047)    | 0 (0.000) |     9.28 | Evan, MagiC, NIGHT666LADE, S0ph3R, TABEN    |
|           29 |     1670 | 2024-10-01 | FLUFFY AIMERS    | L   | 0.682      | -            | -                | -                | -         |    -4.39 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           28 |     1693 | 2024-10-01 | Nouns            | L   | 0.681      | -            | -                | -                | -         |    -2.02 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           27 |     1695 | 2024-10-01 | Nouns            | L   | 0.681      | -            | -                | -                | -         |    -2.06 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           26 |     1721 | 2024-09-30 | M80              | L   | 0.675      | -            | -                | -                | -         |    -0.83 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           25 |     1723 | 2024-09-30 | M80              | L   | 0.675      | -            | -                | -                | -         |    -0.84 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           24 |     1957 | 2024-09-24 | Legacy           | L   | 0.636      | -            | -                | -                | -         |    -2.27 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           23 |     1959 | 2024-09-24 | Legacy           | L   | 0.635      | -            | -                | -                | -         |    -2.33 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           22 |     1997 | 2024-09-23 | InControl        | W   | 0.630      | 0.371        | 0.006 (0.001)    | -                | 0 (0.000) |     8.55 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           21 |     2114 | 2024-09-19 | vagrants         | W   | 0.602      | 0.371        | 0.004 (0.001)    | 0.203 (0.045)    | 0 (0.000) |    11.13 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           20 |     2153 | 2024-09-18 | Wildcard         | L   | 0.595      | -            | -                | -                | -         |    -0.54 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           19 |     2155 | 2024-09-18 | Wildcard         | L   | 0.594      | -            | -                | -                | -         |    -0.54 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           18 |     2264 | 2024-09-14 | Dangerous        | W   | 0.568      | -            | -                | -                | 0 (0.000) |     3.19 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           17 |     2300 | 2024-09-13 | timbermen        | L   | 0.562      | -            | -                | -                | -         |    -3.75 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           16 |     2301 | 2024-09-13 | timbermen        | L   | 0.562      | -            | -                | -                | -         |    -3.88 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           15 |     2328 | 2024-09-12 | jahsdnmasjdm     | L   | 0.555      | -            | -                | -                | -         |   -12.80 | Evan, HorizoN, MagiC, NIGHT666LADE, TABEN   |
|           14 |     2560 | 2024-09-04 | vagrants         | L   | 0.502      | -            | -                | -                | -         |    -7.15 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           13 |     2567 | 2024-09-04 | vagrants         | W   | 0.502      | 0.477        | 0.004 (0.001)    | 0.203 (0.049)    | 0 (0.000) |     8.88 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|           12 |     2593 | 2024-09-03 | BOSS             | L   | 0.496      | -            | -                | -                | -         |    -1.93 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           11 |     2596 | 2024-09-03 | BOSS             | L   | 0.495      | -            | -                | -                | -         |    -1.97 | dantemoren, MagiC, NIGHT666LADE, TABEN, xam |
|           10 |     3401 | 2024-08-11 | USA              | L   | 0.343      | -            | -                | -                | -         |    -8.19 | karrigod, MagiC, NIGHT666LADE, TABEN, xam   |
|            9 |     3501 | 2024-08-07 | E-Xolos LAZER    | L   | 0.316      | -            | -                | -                | -         |    -4.45 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            8 |     3506 | 2024-08-07 | Mythic           | W   | 0.315      | 0.477        | -                | 0.138 (0.021)    | 0 (0.000) |     3.17 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            7 |     3507 | 2024-08-07 | Mythic           | L   | 0.315      | -            | -                | -                | -         |    -6.88 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            6 |     3558 | 2024-08-06 | NRG              | L   | 0.309      | -            | -                | -                | -         |    -0.66 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            5 |     3563 | 2024-08-06 | NRG              | L   | 0.309      | -            | -                | -                | -         |    -0.66 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            4 |     3761 | 2024-07-31 | Take Flyte       | W   | 0.269      | 0.477        | 0.002 (0.000)    | 0.253 (0.032)    | -         |     4.92 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            3 |     3766 | 2024-07-31 | Take Flyte       | W   | 0.269      | 0.477        | -                | 0.253 (0.032)    | -         |     5.03 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            2 |     3858 | 2024-07-29 | LAG              | W   | 0.256      | 0.371        | 0.003 (0.000)    | -                | -         |     3.88 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |
|            1 |     3923 | 2024-07-27 | Canada           | L   | 0.241      | -            | -                | -                | -         |    -4.11 | MagiC, NIGHT666LADE, S0ph3R, TABEN, xam     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,293.86)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
