### Roster Details<br />
Team Name: Memeories<br />
Roster: AEROj, fatguy, Slugy, Tiski<br />
Global Rank: [321](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_05_04.md)<br />
Regional Rank: [84]( ../../standings_americas_2026_05_04.md)<br />
<br />
Final Rank Value:  513.0<br />
<br />
Final Rank Value (513.0) = Starting Rank Value (491.7) + Head To Head Adjustments (21.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.195[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.7
- 400 + ( ( 0.049 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 491.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1471 | 2026-03-28 | Fisher College | L   | 0.955      | -            | -                | -                | -         |    -0.86 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            8 |     1490 | 2026-03-28 | Beyond Limits  | W   | 0.954      | 0.354        | 0.000 (0.000)    | 0.032 (0.011)    | 1 (0.954) |    12.04 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            7 |     1502 | 2026-03-28 | Voca           | L   | 0.954      | -            | -                | -                | -         |    -0.26 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            6 |     1512 | 2026-03-28 | Beyond Limits  | W   | 0.953      | 0.354        | 0.000 (0.000)    | 0.032 (0.011)    | 1 (0.953) |    12.47 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            5 |     4827 | 2026-01-03 | F5             | L   | 0.396      | -            | -                | -                | -         |    -1.70 | AEROj, fatguy, Fezera, Slugy, Tiski |
|            4 |     4833 | 2026-01-03 | 9INE           | L   | 0.395      | -            | -                | -                | -         |    -0.15 | AEROj, fatguy, Fezera, Slugy, Tiski |
|            3 |     5824 | 2025-11-08 | Reign Above    | L   | 0.023      | -            | -                | -                | -         |    -0.28 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            2 |     5827 | 2025-11-08 | Outfit 49      | W   | 0.022      | 0.333        | 0.000 (0.000)    | 0.027 (0.000)    | 1 (0.022) |     0.38 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            1 |     5836 | 2025-11-08 | Reign Above    | L   | 0.021      | -            | -                | -                | -         |    -0.26 | AEROj, fatguy, Ounce, Slugy, Tiski  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
