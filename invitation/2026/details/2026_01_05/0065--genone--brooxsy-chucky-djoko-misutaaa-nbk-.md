### Roster Details<br />
Team Name: GenOne<br />
Roster: Brooxsy, Chucky, Djoko, misutaaa, NBK-<br />
Global Rank: [65](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [47]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  1128.6<br />
<br />
Final Rank Value (1128.6) = Starting Rank Value (1079.3) + Head To Head Adjustments (49.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.341[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.161[<sup>2</sup>](#table1)
- LAN Wins: 0.551[<sup>2</sup>](#table1)

The average of these factors is 0.343<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1079.3
- 400 + ( ( 0.343 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1079.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       91 | 2025-12-23 | Nemesis          | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.312 (0.104)    | 0 (0.000) |    10.19 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           27 |       93 | 2025-12-23 | 33               | W   | 1.000      | 0.333        | 0.014 (0.005)    | 0.670 (0.223)    | 0 (0.000) |    14.45 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           26 |       95 | 2025-12-22 | Phantom          | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.298 (0.099)    | 0 (0.000) |    17.15 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           25 |      108 | 2025-12-21 | Eternal Fire     | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.725 (0.242)    | -         |     7.67 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           24 |      504 | 2025-11-29 | Monte            | L   | 0.954      | -            | -                | -                | -         |    -8.12 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           23 |      521 | 2025-11-29 | 9INE             | W   | 0.953      | 0.333        | 0.062 (0.020)    | 0.746 (0.237)    | 1 (0.953) |    25.66 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           22 |      715 | 2025-11-21 | Inner Circle     | L   | 0.901      | -            | -                | -                | -         |    -5.66 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           21 |      724 | 2025-11-21 | Passion UA       | L   | 0.900      | -            | -                | -                | -         |    -1.77 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           20 |      750 | 2025-11-21 | BASEMENT BOYS    | W   | 0.898      | -            | -                | -                | 1 (0.898) |     6.43 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           19 |      784 | 2025-11-20 | MINLATE          | W   | 0.892      | -            | -                | -                | 1 (0.892) |     9.85 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           18 |      794 | 2025-11-20 | Strael Bora      | W   | 0.891      | -            | -                | -                | 1 (0.891) |     0.71 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           17 |     1010 | 2025-11-10 | Nuclear TigeRES  | L   | 0.825      | -            | -                | -                | -         |   -12.34 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           16 |     1025 | 2025-11-09 | JiJieHao         | L   | 0.820      | -            | -                | -                | -         |   -16.74 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           15 |     1076 | 2025-11-08 | HAVU             | W   | 0.813      | 0.384        | 0.011 (0.003)    | 0.331 (0.104)    | -         |     5.97 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           14 |     1148 | 2025-11-07 | AMKAL            | W   | 0.806      | 0.384        | -                | 0.506 (0.157)    | -         |     5.93 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           13 |     1203 | 2025-11-07 | Nuclear TigeRES  | L   | 0.805      | -            | -                | -                | -         |   -12.70 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           12 |     1243 | 2025-11-05 | BASEMENT BOYS    | W   | 0.795      | -            | -                | -                | -         |     6.89 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           11 |     1307 | 2025-11-03 | AMKAL            | W   | 0.780      | 0.384        | -                | 0.506 (0.152)    | -         |     6.22 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|           10 |     1322 | 2025-11-02 | CPH Wolves       | L   | 0.775      | -            | -                | -                | -         |   -19.08 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            9 |     1398 | 2025-10-31 | Phantom          | W   | 0.758      | -            | -                | -                | -         |     4.43 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            8 |     1420 | 2025-10-29 | ENCE Academy     | W   | 0.748      | 0.344        | 0.005 (0.001)    | 0.427 (0.110)    | -         |     4.87 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            7 |     1457 | 2025-10-28 | HAVU             | W   | 0.740      | 0.344        | 0.011 (0.003)    | -                | -         |     5.57 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            6 |     1767 | 2025-10-21 | Mousquetaires    | L   | 0.692      | -            | -                | -                | -         |   -16.76 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            5 |     2640 | 2025-09-27 | Passion UA       | L   | 0.533      | -            | -                | -                | -         |    -1.25 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            4 |     2668 | 2025-09-26 | FlyQuest         | W   | 0.528      | 0.339        | 0.086 (0.015)    | -                | 1 (0.528) |    13.14 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            3 |     2693 | 2025-09-26 | Oramond          | W   | 0.526      | 0.339        | 0.081 (0.014)    | 1.000 (0.178)    | 1 (0.526) |     8.52 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            2 |     2728 | 2025-09-25 | MANA             | W   | 0.520      | -            | -                | -                | 1 (0.520) |     0.81 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |
|            1 |     2746 | 2025-09-25 | ex-Zero Tenacity | L   | 0.518      | -            | -                | -                | -         |   -10.82 | Brooxsy, Chucky, Djoko, misutaaa, NBK- |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,000.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-23 |      1.000 | $5,000.00      | $5,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
