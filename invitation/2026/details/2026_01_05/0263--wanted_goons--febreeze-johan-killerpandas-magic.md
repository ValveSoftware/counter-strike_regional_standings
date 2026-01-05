### Roster Details<br />
Team Name: Wanted Goons<br />
Roster: febreeze, Johan, killerPandas, Magic<br />
Global Rank: [263](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [72]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  522.5<br />
<br />
Final Rank Value (522.5) = Starting Rank Value (521.0) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.0
- 400 + ( ( 0.061 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 521.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      266 | 2025-12-10 | Outfit 49     | L   | 1.000      | -            | -                | -                | -         |   -12.50 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           17 |      295 | 2025-12-08 | Phoenix       | L   | 1.000      | -            | -                | -                | -         |    -9.67 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           16 |      384 | 2025-12-04 | Aether        | W   | 0.990      | 0.333        | 0.001 (0.000)    | 0.102 (0.034)    | 0 (0.000) |    20.66 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           15 |      427 | 2025-12-02 | regain        | L   | 0.977      | -            | -                | -                | -         |    -7.58 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           14 |     1576 | 2025-10-25 | Ghost         | L   | 0.722      | -            | -                | -                | -         |    -7.83 | cutedog, febreeze, Johan, killerPandas, Magic |
|           13 |     1632 | 2025-10-24 | LAG           | L   | 0.716      | -            | -                | -                | -         |    -5.63 | cutedog, febreeze, Johan, killerPandas, Magic |
|           12 |     1695 | 2025-10-23 | anything else | W   | 0.709      | 0.363        | 0.000 (0.000)    | 0.045 (0.012)    | 0 (0.000) |     9.33 | cutedog, febreeze, Johan, killerPandas, Magic |
|           11 |     2157 | 2025-10-07 | Mythic        | L   | 0.602      | -            | -                | -                | -         |    -6.10 | febreeze, JDubs, Johan, killerPandas, Magic   |
|           10 |     2275 | 2025-10-05 | Take Flyte    | L   | 0.589      | -            | -                | -                | -         |    -8.04 | febreeze, JDubs, Johan, killerPandas, Magic   |
|            9 |     2936 | 2025-09-17 | LAG           | L   | 0.470      | -            | -                | -                | -         |    -4.34 | cutedog, febreeze, Johan, killerPandas, Magic |
|            8 |     3124 | 2025-09-12 | Akimbo        | W   | 0.436      | 0.363        | 0.002 (0.000)    | 0.045 (0.007)    | 0 (0.000) |     9.02 | cutedog, febreeze, Johan, killerPandas, Magic |
|            7 |     3163 | 2025-09-11 | FlyQuest RED  | W   | 0.430      | 0.363        | 0.018 (0.003)    | 0.272 (0.042)    | 0 (0.000) |    11.00 | cutedog, febreeze, Johan, killerPandas, Magic |
|            6 |     3221 | 2025-09-10 | Ghost         | W   | 0.423      | 0.363        | 0.003 (0.000)    | 0.171 (0.026)    | 0 (0.000) |     8.76 | cutedog, febreeze, Johan, killerPandas, Magic |
|            5 |     3267 | 2025-09-09 | SkinRave      | L   | 0.416      | -            | -                | -                | -         |    -1.08 | cutedog, febreeze, Johan, killerPandas, Magic |
|            4 |     3323 | 2025-09-08 | InControl     | W   | 0.410      | 0.363        | 0.001 (0.000)    | 0.200 (0.030)    | 0 (0.000) |     9.41 | cutedog, febreeze, Johan, killerPandas, Magic |
|            3 |     3922 | 2025-08-14 | Arrival Seven | L   | 0.243      | -            | -                | -                | -         |    -3.91 | cutedog, febreeze, Johan, killerPandas, Magic |
|            2 |     3971 | 2025-08-13 | anything else | W   | 0.236      | 0.363        | 0.000 (0.000)    | 0.045 (0.004)    | 0 (0.000) |     3.56 | cutedog, febreeze, Johan, killerPandas, Magic |
|            1 |     4069 | 2025-08-11 | Aether        | L   | 0.223      | -            | -                | -                | -         |    -3.52 | cutedog, febreeze, Johan, killerPandas, Magic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
