### Roster Details<br />
Team Name: GamerLegion<br />
Roster: PR, REZ, sl3nd, Tauson, ztr<br />
Global Rank: [13](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [8]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1386.0<br />
<br />
Final Rank Value (1386.0) = Starting Rank Value (1373.1) + Head To Head Adjustments (12.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.554[<sup>1</sup>](#table2)
- Bounty Collected: 0.423[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.828[<sup>2</sup>](#table1)

The average of these factors is 0.491<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1373.1
- 400 + ( ( 0.491 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1373.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |        2 | 2025-01-17 | paiN          | L   | 1.000      | -            | -                | -                | -         |   -13.84 | PR, REZ, sl3nd, Tauson, ztr      |
|           23 |      341 | 2024-12-06 | Natus Vincere | L   | 0.923      | -            | -                | -                | -         |    -3.90 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           22 |      367 | 2024-12-05 | Wildcard      | W   | 0.916      | 1.000        | 0.231 (0.211)    | 0.636 (0.583)    | 1 (0.916) |    12.33 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           21 |      395 | 2024-12-05 | Liquid        | L   | 0.910      | -            | -                | -                | -         |    -6.59 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           20 |      404 | 2024-12-04 | Vitality      | L   | 0.909      | -            | -                | -                | -         |    -2.59 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           19 |      456 | 2024-12-02 | Passion UA    | W   | 0.891      | 0.143        | 0.109 (0.014)    | 0.830 (0.106)    | 1 (0.891) |     6.41 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           18 |      474 | 2024-12-01 | The MongolZ   | L   | 0.883      | -            | -                | -                | -         |    -2.33 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           17 |      500 | 2024-11-30 | paiN          | W   | 0.878      | 0.143        | 0.256 (0.032)    | 0.667 (0.084)    | 1 (0.878) |    15.89 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           16 |      515 | 2024-11-29 | FURIA         | W   | 0.875      | 0.143        | 0.200 (0.025)    | 0.611 (0.076)    | 1 (0.875) |    20.72 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           15 |      699 | 2024-11-20 | BetBoom       | W   | 0.812      | 0.143        | 0.112 (0.013)    | -                | 1 (0.812) |     6.35 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           14 |      700 | 2024-11-20 | SINNERS       | W   | 0.811      | 0.143        | 0.101 (0.012)    | 0.683 (0.079)    | 1 (0.811) |     4.51 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           13 |      711 | 2024-11-19 | Falcons       | W   | 0.804      | -            | -                | -                | 1 (0.804) |     3.32 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           12 |      722 | 2024-11-18 | UNiTY         | W   | 0.798      | -            | -                | -                | 1 (0.798) |     2.11 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           11 |      747 | 2024-11-17 | ECLOT         | L   | 0.790      | -            | -                | -                | -         |   -17.85 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           10 |      755 | 2024-11-16 | Vitality      | L   | 0.789      | -            | -                | -                | -         |    -2.03 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            9 |     1520 | 2024-10-11 | GUN5          | L   | 0.545      | -            | -                | -                | -         |   -14.15 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            8 |     1645 | 2024-10-06 | Passion UA    | W   | 0.513      | 0.435        | 0.109 (0.024)    | 0.830 (0.185)    | 0 (0.000) |     3.83 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            7 |     1650 | 2024-10-06 | 9 Pandas      | W   | 0.512      | 0.435        | 0.159 (0.035)    | 0.802 (0.178)    | 0 (0.000) |     3.10 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            6 |     1677 | 2024-10-05 | B8            | W   | 0.506      | 0.435        | 0.163 (0.036)    | 0.500 (0.110)    | -         |     3.69 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            5 |     1715 | 2024-10-04 | DRILLAS       | W   | 0.500      | -            | -                | -                | -         |     0.84 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            4 |     1928 | 2024-09-28 | BetBoom       | L   | 0.459      | -            | -                | -                | -         |   -11.63 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            3 |     1932 | 2024-09-28 | Aurora        | W   | 0.459      | -            | -                | -                | -         |     1.26 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            2 |     1984 | 2024-09-27 | B8            | W   | 0.451      | 0.435        | 0.163 (0.032)    | 0.500 (0.098)    | -         |     2.82 | FL4MUS, sl3nd, Tauson, volt, ztr |
|            1 |     2010 | 2024-09-26 | CPH Wolves    | W   | 0.446      | 0.435        | -                | 0.355 (0.069)    | -         |     0.61 | FL4MUS, sl3nd, Tauson, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($35,430.95)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      0.977 | $20,000.00     | $19,548.13      |
| 2024-10-06 |      0.513 | $22,000.00     | $11,289.63      |
| 2024-09-28 |      0.459 | $10,000.00     | $4,593.20       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
