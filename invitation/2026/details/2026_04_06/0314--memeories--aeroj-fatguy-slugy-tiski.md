### Roster Details<br />
Team Name: Memeories<br />
Roster: AEROj, fatguy, Slugy, Tiski<br />
Global Rank: [314](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [86]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  525.9<br />
<br />
Final Rank Value (525.9) = Starting Rank Value (509.1) + Head To Head Adjustments (16.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.221[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.1
- 400 + ( ( 0.056 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 509.1


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
|            9 |      405 | 2026-03-28 | Fisher College | L   | 1.000      | -            | -                | -                | -         |    -2.62 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            8 |      422 | 2026-03-28 | Beyond Limits  | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.031 (0.011)    | 1 (1.000) |    12.29 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            7 |      433 | 2026-03-28 | Voca           | L   | 1.000      | -            | -                | -                | -         |    -0.37 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            6 |      443 | 2026-03-28 | Beyond Limits  | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.031 (0.011)    | 1 (1.000) |    12.76 | AbbyDog, AEROj, fatguy, ryn, Slugy  |
|            5 |     3730 | 2026-01-03 | F5             | L   | 0.583      | -            | -                | -                | -         |    -2.90 | AEROj, fatguy, Fezera, Slugy, Tiski |
|            4 |     3736 | 2026-01-03 | 9INE           | L   | 0.582      | -            | -                | -                | -         |    -0.17 | AEROj, fatguy, Fezera, Slugy, Tiski |
|            3 |     4727 | 2025-11-08 | Reign Above    | L   | 0.210      | -            | -                | -                | -         |    -2.70 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            2 |     4730 | 2025-11-08 | Outfit 49      | W   | 0.209      | 0.333        | 0.000 (0.000)    | 0.005 (0.000)    | 1 (0.209) |     3.21 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            1 |     4739 | 2025-11-08 | Reign Above    | L   | 0.208      | -            | -                | -                | -         |    -2.70 | AEROj, fatguy, Ounce, Slugy, Tiski  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($459,637.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
