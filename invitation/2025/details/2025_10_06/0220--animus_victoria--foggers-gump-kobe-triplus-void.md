### Roster Details<br />
Team Name: Animus Victoria<br />
Roster: foggers, gump, Kobe, TRIPLUS, void<br />
Global Rank: [220](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_10_06.md)<br />
Regional Rank: [33]( ../../standings_asia_2025_10_06.md)<br />
<br />
Final Rank Value:  520.3<br />
<br />
Final Rank Value (520.3) = Starting Rank Value (516.3) + Head To Head Adjustments (4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.210[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.3
- 400 + ( ( 0.059 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 516.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      248 | 2025-09-27 | Aura        | L   | 1.000      | -            | -                | -                | -         |   -20.99 | foggers, kairo, phoebe, TRIPLUS, void |
|           10 |      250 | 2025-09-26 | Mindfreak   | L   | 1.000      | -            | -                | -                | -         |   -14.82 | foggers, kairo, phoebe, TRIPLUS, void |
|            9 |      883 | 2025-09-08 | KZG         | L   | 1.000      | -            | -                | -                | -         |   -11.39 | foggers, gump, Kobe, TRIPLUS, void    |
|            8 |      902 | 2025-09-07 | SemperFi    | L   | 1.000      | -            | -                | -                | -         |    -6.00 | foggers, gump, Kobe, TRIPLUS, void    |
|            7 |      982 | 2025-09-03 | KZG         | W   | 0.979      | 0.314        | 0.002 (0.001)    | 0.309 (0.095)    | 0 (0.000) |    19.96 | foggers, gump, Kobe, TRIPLUS, void    |
|            6 |     1000 | 2025-09-01 | Mindfreak   | W   | 0.965      | 0.314        | 0.002 (0.001)    | 0.260 (0.079)    | 0 (0.000) |    17.35 | foggers, gump, Kobe, TRIPLUS, void    |
|            5 |     2108 | 2025-07-16 | Ground Zero | L   | 0.652      | -            | -                | -                | -         |    -6.38 | foggers, gump, Kobe, TRIPLUS, void    |
|            4 |     2153 | 2025-07-14 | Mindfreak   | W   | 0.638      | 0.314        | 0.002 (0.000)    | 0.260 (0.052)    | 0 (0.000) |    12.03 | foggers, gump, Kobe, TRIPLUS, void    |
|            3 |     2188 | 2025-07-12 | Rooster     | L   | 0.626      | -            | -                | -                | -         |    -4.52 | foggers, gump, Kobe, TRIPLUS, void    |
|            2 |     2285 | 2025-07-09 | Mindfreak   | W   | 0.605      | 0.314        | 0.002 (0.000)    | 0.260 (0.049)    | 0 (0.000) |    12.44 | foggers, gump, Kobe, TRIPLUS, void    |
|            1 |     2308 | 2025-07-07 | LE-LUX      | W   | 0.592      | 0.314        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.30 | foggers, gump, Kobe, TRIPLUS, void    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
