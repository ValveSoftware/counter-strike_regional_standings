### Roster Details<br />
Team Name: Wanted Goons<br />
Roster: febreeze, Johan, killerPandas, Magic<br />
Global Rank: [314](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_02.md)<br />
Regional Rank: [88]( ../../standings_americas_2026_03_02.md)<br />
<br />
Final Rank Value:  482.4<br />
<br />
Final Rank Value (482.4) = Starting Rank Value (488.5) + Head To Head Adjustments (-6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 488.5
- 400 + ( ( 0.047 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 488.5


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
|           15 |     2046 | 2025-12-10 | Aether        | L   | 0.656      | -            | -                | -                | -         |    -7.29 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           14 |     2075 | 2025-12-08 | Outfit 49     | L   | 0.643      | -            | -                | -                | -         |    -5.04 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           13 |     2164 | 2025-12-04 | Aether        | W   | 0.617      | 0.333        | 0.000 (0.000)    | 0.023 (0.005)    | 0 (0.000) |    12.75 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           12 |     2207 | 2025-12-02 | regain        | L   | 0.603      | -            | -                | -                | -         |    -4.66 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           11 |     3356 | 2025-10-25 | Ghost         | L   | 0.349      | -            | -                | -                | -         |    -3.52 | cutedog, febreeze, Johan, killerPandas, Magic |
|           10 |     3412 | 2025-10-24 | LAG           | L   | 0.342      | -            | -                | -                | -         |    -1.75 | cutedog, febreeze, Johan, killerPandas, Magic |
|            9 |     3475 | 2025-10-23 | anything else | W   | 0.335      | 0.363        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     4.97 | cutedog, febreeze, Johan, killerPandas, Magic |
|            8 |     3937 | 2025-10-07 | Mythic        | L   | 0.229      | -            | -                | -                | -         |    -2.00 | febreeze, JDubs, Johan, killerPandas, Magic   |
|            7 |     4055 | 2025-10-05 | Chicken Coop  | L   | 0.216      | -            | -                | -                | -         |    -3.24 | febreeze, JDubs, Johan, killerPandas, Magic   |
|            6 |     4716 | 2025-09-17 | LAG           | L   | 0.096      | -            | -                | -                | -         |    -0.51 | cutedog, febreeze, Johan, killerPandas, Magic |
|            5 |     4904 | 2025-09-12 | Akimbo        | W   | 0.063      | 0.363        | 0.000 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     0.97 | cutedog, febreeze, Johan, killerPandas, Magic |
|            4 |     4943 | 2025-09-11 | FlyQuest RED  | W   | 0.056      | 0.363        | 0.015 (0.000)    | 0.172 (0.003)    | 0 (0.000) |     1.40 | cutedog, febreeze, Johan, killerPandas, Magic |
|            3 |     5001 | 2025-09-10 | Ghost         | W   | 0.049      | 0.363        | 0.002 (0.000)    | 0.072 (0.001)    | 0 (0.000) |     1.05 | cutedog, febreeze, Johan, killerPandas, Magic |
|            2 |     5047 | 2025-09-09 | Rave          | L   | 0.043      | -            | -                | -                | -         |    -0.16 | cutedog, febreeze, Johan, killerPandas, Magic |
|            1 |     5103 | 2025-09-08 | InControl     | W   | 0.036      | 0.363        | 0.000 (0.000)    | 0.219 (0.003)    | 0 (0.000) |     0.83 | cutedog, febreeze, Johan, killerPandas, Magic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
