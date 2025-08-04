### Roster Details<br />
Team Name: Astralis Talent<br />
Roster: ANSG1, kiR, kroK, suma, Zanto<br />
Global Rank: [260](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [135]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  483.4<br />
<br />
Final Rank Value (483.4) = Starting Rank Value (486.3) + Head To Head Adjustments (-3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.3
- 400 + ( ( 0.046 - 0.000 ) / ( 0.845 - 0.000 ) ) * 1600 = 486.3


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
|            5 |     1722 | 2025-04-26 | Tricked       | L   | 0.534      | -            | -                | -                | -         |    -1.43 | ANSG1, kiR, kroK, suma, Zanto |
|            4 |     1987 | 2025-04-13 | Johnny Speeds | L   | 0.445      | -            | -                | -                | -         |    -1.09 | ANSG1, kiR, kroK, suma, Zanto |
|            3 |     3675 | 2025-02-21 | Minsk House   | L   | 0.107      | -            | -                | -                | -         |    -2.09 | ANSG1, kiR, kroK, suma, Zanto |
|            2 |     3681 | 2025-02-21 | TPuDCATb TPu  | W   | 0.107      | 0.143        | 0.019 (0.000)    | 0.983 (0.015)    | 0 (0.000) |     2.92 | ANSG1, kiR, kroK, suma, Zanto |
|            1 |     3842 | 2025-02-15 | ALGO          | L   | 0.067      | -            | -                | -                | -         |    -1.30 | ANSG1, kiR, kroK, suma, Zanto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($440,967.54)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
