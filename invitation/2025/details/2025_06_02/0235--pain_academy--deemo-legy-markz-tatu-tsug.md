### Roster Details<br />
Team Name: paiN Academy<br />
Roster: deemO, legy, Markz, Tatu, tsug<br />
Global Rank: [235](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [77]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  537.2<br />
<br />
Final Rank Value (537.2) = Starting Rank Value (509.5) + Head To Head Adjustments (27.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.5
- 400 + ( ( 0.060 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 509.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2105 | 2025-03-09 | Sharks      | L   | 0.638      | -            | -                | -                | -         |    -1.52 | deemO, legy, Markz, Tatu, tsug    |
|            6 |     2291 | 2025-03-06 | Players     | W   | 0.619      | 0.371        | 0.002 (0.000)    | 0.218 (0.050)    | 0 (0.000) |    13.72 | deemO, legy, Markz, Tatu, tsug    |
|            5 |     2331 | 2025-03-05 | Yawara      | W   | 0.613      | 0.371        | 0.004 (0.001)    | 0.273 (0.062)    | 0 (0.000) |    14.41 | deemO, legy, Markz, Tatu, tsug    |
|            4 |     2382 | 2025-03-03 | NITRO       | L   | 0.599      | -            | -                | -                | -         |    -4.84 | deemO, legy, Markz, Tatu, tsug    |
|            3 |     2451 | 2025-02-28 | GameHunters | W   | 0.580      | 0.371        | 0.007 (0.001)    | 0.339 (0.073)    | 0 (0.000) |    14.01 | deemO, legy, Markz, Tatu, tsug    |
|            2 |     2465 | 2025-02-27 | ShindeN     | L   | 0.574      | -            | -                | -                | -         |    -4.67 | deemO, legy, Markz, Tatu, tsug    |
|            1 |     3094 | 2025-02-07 | KRÜ         | L   | 0.440      | -            | -                | -                | -         |    -3.32 | deemO, legy, Markz, PremiuM, Tatu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
