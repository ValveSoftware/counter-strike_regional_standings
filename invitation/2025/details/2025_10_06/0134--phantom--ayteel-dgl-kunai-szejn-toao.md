### Roster Details<br />
Team Name: Phantom<br />
Roster: Ayteel, DGL, Kunai, szejn, TOAO<br />
Global Rank: [134](../../standings_global_2025_10_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_10_06.md)<br />
Regional Rank: [85]( ../../standings_europe_2025_10_06.md)<br />
<br />
Final Rank Value:  739.7<br />
<br />
Final Rank Value (739.7) = Starting Rank Value (685.1) + Head To Head Adjustments (54.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.1
- 400 + ( ( 0.146 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 685.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      224 | 2025-09-27 | BIG               | L   | 1.000      | -            | -                | -                | -         |    -1.35 | Ayteel, DGL, Kunai, szejn, TOAO |
|            6 |      245 | 2025-09-27 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -0.65 | Ayteel, DGL, Kunai, szejn, TOAO |
|            5 |      275 | 2025-09-26 | Wildcard          | W   | 1.000      | 0.354        | 0.056 (0.020)    | 0.825 (0.292)    | 1 (1.000) |    28.86 | Ayteel, DGL, Kunai, szejn, TOAO |
|            4 |      292 | 2025-09-26 | ESC               | W   | 1.000      | 0.354        | 0.125 (0.044)    | 0.968 (0.343)    | 1 (1.000) |    30.30 | Ayteel, DGL, Kunai, szejn, TOAO |
|            3 |      898 | 2025-09-07 | FUT               | L   | 1.000      | -            | -                | -                | -         |    -1.46 | Ayteel, DGL, Kunai, szejn, TOAO |
|            2 |     2559 | 2025-06-14 | Johnny Speeds     | L   | 0.440      | -            | -                | -                | -         |    -0.98 | Ayteel, DGL, Kunai, szejn, TOAO |
|            1 |     2580 | 2025-06-13 | Ninjas in Pyjamas | L   | 0.435      | -            | -                | -                | -         |    -0.08 | Ayteel, DGL, Kunai, szejn, TOAO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($380,085.28)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
