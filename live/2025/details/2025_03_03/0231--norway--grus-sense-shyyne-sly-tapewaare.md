### Roster Details<br />
Team Name: Norway<br />
Roster: Grus, sense, shyyne, SLY, Tapewaare<br />
Global Rank: [231](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [137]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  596.3<br />
<br />
Final Rank Value (596.3) = Starting Rank Value (575.7) + Head To Head Adjustments (20.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.167[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 575.7
- 400 + ( ( 0.091 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 575.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1503 | 2024-11-15 | Turkey    | W   | 0.479      | 0.617        | 0.000 (0.000)    | 0.056 (0.017)    | 1 (0.479) |     7.84 | Grus, sense, shyyne, SLY, Tapewaare |
|            4 |     1512 | 2024-11-15 | Metizport | L   | 0.478      | -            | -                | -                | -         |    -1.10 | Grus, sense, shyyne, SLY, Tapewaare |
|            3 |     1525 | 2024-11-14 | Canada    | W   | 0.474      | 0.617        | 0.000 (0.000)    | 0.037 (0.011)    | 1 (0.474) |     6.50 | Grus, sense, shyyne, SLY, Tapewaare |
|            2 |     1573 | 2024-11-13 | Mindfreak | W   | 0.466      | 0.617        | 0.002 (0.001)    | 0.088 (0.025)    | 1 (0.466) |     9.77 | Grus, sense, shyyne, SLY, Tapewaare |
|            1 |     1577 | 2024-11-13 | Permitta  | L   | 0.466      | -            | -                | -                | -         |    -2.38 | Grus, sense, shyyne, SLY, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
