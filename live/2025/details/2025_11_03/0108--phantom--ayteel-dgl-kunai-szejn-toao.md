### Roster Details<br />
Team Name: Phantom<br />
Roster: Ayteel, DGL, Kunai, szejn, TOAO<br />
Global Rank: [108](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_11_03.md)<br />
Regional Rank: [73]( ../../standings_europe_2025_11_03.md)<br />
<br />
Final Rank Value:  824.7<br />
<br />
Final Rank Value (824.7) = Starting Rank Value (826.3) + Head To Head Adjustments (-1.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.308[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.293[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 826.3
- 400 + ( ( 0.227 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 826.3


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
|           14 |       12 | 2025-11-01 | Nemesis           | L   | 1.000      | -            | -                | -                | -         |   -13.67 | Ayteel, DGL, Kunai, szejn, TOAO |
|           13 |       22 | 2025-11-01 | 8Sins             | W   | 1.000      | 0.309        | 0.003 (0.001)    | 0.063 (0.019)    | 1 (1.000) |     9.36 | Ayteel, DGL, Kunai, szejn, TOAO |
|           12 |       27 | 2025-11-01 | Prestige          | L   | 1.000      | -            | -                | -                | -         |   -22.98 | Ayteel, DGL, Kunai, szejn, TOAO |
|           11 |       46 | 2025-10-31 | GenOne            | L   | 1.000      | -            | -                | -                | -         |   -19.53 | Ayteel, DGL, Kunai, szejn, TOAO |
|           10 |       94 | 2025-10-27 | MOUZ NXT          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.119 (0.017)    | 0 (0.000) |     8.48 | Ayteel, DGL, Kunai, szejn, TOAO |
|            9 |      111 | 2025-10-26 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -11.76 | Ayteel, DGL, Kunai, szejn, TOAO |
|            8 |      140 | 2025-10-25 | Dziuseppe         | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.357 (0.051)    | 0 (0.000) |    10.87 | Ayteel, DGL, Kunai, szejn, TOAO |
|            7 |     1058 | 2025-09-27 | BIG               | L   | 0.953      | -            | -                | -                | -         |    -2.40 | Ayteel, DGL, Kunai, szejn, TOAO |
|            6 |     1079 | 2025-09-27 | fnatic            | L   | 0.951      | -            | -                | -                | -         |    -1.39 | Ayteel, DGL, Kunai, szejn, TOAO |
|            5 |     1110 | 2025-09-26 | Wildcard          | W   | 0.946      | 0.354        | 0.030 (0.010)    | 0.726 (0.243)    | 1 (0.946) |    22.46 | Ayteel, DGL, Kunai, szejn, TOAO |
|            4 |     1128 | 2025-09-26 | ESC               | W   | 0.944      | 0.354        | 0.134 (0.045)    | 1.000 (0.334)    | 1 (0.944) |    26.99 | Ayteel, DGL, Kunai, szejn, TOAO |
|            3 |     1797 | 2025-09-07 | FUT               | L   | 0.819      | -            | -                | -                | -         |    -1.88 | Ayteel, DGL, Kunai, szejn, TOAO |
|            2 |     3460 | 2025-06-14 | Johnny Speeds     | L   | 0.253      | -            | -                | -                | -         |    -5.77 | Ayteel, DGL, Kunai, szejn, TOAO |
|            1 |     3481 | 2025-06-13 | Ninjas in Pyjamas | L   | 0.247      | -            | -                | -                | -         |    -0.34 | Ayteel, DGL, Kunai, szejn, TOAO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($460.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-02 |      1.000 | $460.00        | $460.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
