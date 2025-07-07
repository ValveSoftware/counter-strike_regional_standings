### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, kiR, kroK, suma, Zanto<br />
Global Rank: [250](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [133]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  482.8<br />
<br />
Final Rank Value (482.8) = Starting Rank Value (487.9) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.9
- 400 + ( ( 0.047 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 487.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1195 | 2025-04-26 | Tricked       | L   | 0.721      | -            | -                | -                | -         |    -1.41 | ANSG1, kiR, kroK, suma, Zanto |
|            4 |     1460 | 2025-04-13 | Johnny Speeds | L   | 0.632      | -            | -                | -                | -         |    -1.14 | ANSG1, kiR, kroK, suma, Zanto |
|            3 |     3148 | 2025-02-21 | Minsk House   | L   | 0.293      | -            | -                | -                | -         |    -5.70 | ANSG1, kiR, kroK, suma, Zanto |
|            2 |     3154 | 2025-02-21 | TPuDCATb TPu  | W   | 0.293      | 0.143        | 0.009 (0.000)    | 0.876 (0.037)    | 0 (0.000) |     8.04 | ANSG1, kiR, kroK, suma, Zanto |
|            1 |     3315 | 2025-02-15 | ALGO          | L   | 0.253      | -            | -                | -                | -         |    -4.93 | ANSG1, kiR, kroK, suma, Zanto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
