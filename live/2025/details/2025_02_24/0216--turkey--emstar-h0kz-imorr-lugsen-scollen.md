### Roster Details<br />
Team Name: Turkey<br />
Roster: EMSTAR, h0kz, imoRR, lugseN, scolleN<br />
Global Rank: [216](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [134]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  603.6<br />
<br />
Final Rank Value (603.6) = Starting Rank Value (599.7) + Head To Head Adjustments (4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.118[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 599.7
- 400 + ( ( 0.105 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 599.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1415 | 2024-11-15 | Norway    | L   | 0.524      | -            | -                | -                | -         |    -8.54 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            4 |     1423 | 2024-11-15 | Permitta  | L   | 0.524      | -            | -                | -                | -         |    -3.13 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            3 |     1434 | 2024-11-14 | Mindfreak | W   | 0.520      | 0.617        | 0.002 (0.001)    | 0.101 (0.032)    | 1 (0.520) |    10.06 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            2 |     1483 | 2024-11-13 | Metizport | W   | 0.511      | 0.617        | 0.073 (0.023)    | 0.691 (0.218)    | 1 (0.511) |    15.01 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            1 |     1487 | 2024-11-13 | Canada    | L   | 0.511      | -            | -                | -                | -         |    -9.41 | EMSTAR, h0kz, imoRR, lugseN, scolleN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
