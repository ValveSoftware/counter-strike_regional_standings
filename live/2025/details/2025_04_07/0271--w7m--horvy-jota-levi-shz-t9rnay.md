### Roster Details<br />
Team Name: W7M<br />
Roster: horvy, JOTA, levi, shz, t9rnay<br />
Global Rank: [271](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [88]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  422.5<br />
<br />
Final Rank Value (422.5) = Starting Rank Value (403.6) + Head To Head Adjustments (18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.6
- 400 + ( ( 0.002 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 403.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      233 | 2025-03-28 | 2GAME     | L   | 1.000      | -            | -                | -                | -         |    -8.57 | horvy, JOTA, levi, shz, t9rnay |
|            5 |      293 | 2025-03-27 | BESTIA    | L   | 1.000      | -            | -                | -                | -         |    -3.75 | horvy, JOTA, levi, shz, t9rnay |
|            4 |      579 | 2025-03-09 | Swingers  | L   | 1.000      | -            | -                | -                | -         |    -4.19 | fokiu, JOTA, levi, shz, t9rnay |
|            3 |      589 | 2025-03-09 | UNO MILLE | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.400 (0.057)    | 0 (0.000) |    22.27 | fokiu, JOTA, levi, shz, t9rnay |
|            2 |      685 | 2025-03-08 | VELOX     | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.147 (0.021)    | 0 (0.000) |    18.45 | fokiu, JOTA, levi, shz, t9rnay |
|            1 |      742 | 2025-03-07 | 9z        | L   | 0.994      | -            | -                | -                | -         |    -5.29 | fokiu, JOTA, levi, shz, t9rnay |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
