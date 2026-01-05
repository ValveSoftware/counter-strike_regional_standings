### Roster Details<br />
Team Name: Memeories<br />
Roster: AEROj, fatguy, Slugy, Tiski<br />
Global Rank: [290](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_01_05.md)<br />
Regional Rank: [85]( ../../standings_americas_2026_01_05.md)<br />
<br />
Final Rank Value:  434.4<br />
<br />
Final Rank Value (434.4) = Starting Rank Value (445.3) + Head To Head Adjustments (-10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.023<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 445.3
- 400 + ( ( 0.023 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 445.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       50 | 2026-01-03 | F5          | L   | 1.000      | -            | -                | -                | -         |    -9.99 | AEROj, fatguy, Fezera, Slugy, Tiski |
|            4 |       56 | 2026-01-03 | 9INE        | L   | 1.000      | -            | -                | -                | -         |    -0.21 | AEROj, fatguy, Fezera, Slugy, Tiski |
|            3 |     1047 | 2025-11-08 | Reign Above | L   | 0.816      | -            | -                | -                | -         |    -9.34 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            2 |     1050 | 2025-11-08 | Outfit 49   | W   | 0.816      | 0.333        | 0.000 (0.000)    | 0.181 (0.049)    | 1 (0.816) |    18.05 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            1 |     1059 | 2025-11-08 | Reign Above | L   | 0.815      | -            | -                | -                | -         |    -9.33 | AEROj, fatguy, Ounce, Slugy, Tiski  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
