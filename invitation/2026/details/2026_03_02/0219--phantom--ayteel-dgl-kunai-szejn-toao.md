### Roster Details<br />
Team Name: Phantom<br />
Roster: Ayteel, DGL, Kunai, szejn, TOAO<br />
Global Rank: [219](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [142]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  659.2<br />
<br />
Final Rank Value (659.2) = Starting Rank Value (670.2) + Head To Head Adjustments (-11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.235[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.143<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.2
- 400 + ( ( 0.143 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 670.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     2566 | 2025-11-20 | Acend            | L   | 0.518      | -            | -                | -                | -         |    -1.10 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           17 |     2577 | 2025-11-20 | Haemus           | L   | 0.518      | -            | -                | -                | -         |   -11.62 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           16 |     3016 | 2025-11-06 | ALLINNERS        | L   | 0.425      | -            | -                | -                | -         |    -6.39 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           15 |     3040 | 2025-11-05 | NOVAQ            | L   | 0.419      | -            | -                | -                | -         |    -1.42 | Ayteel, DGL, Kunai, lunAtic, szejn |
|           14 |     3125 | 2025-11-01 | Nemesis          | L   | 0.395      | -            | -                | -                | -         |    -4.18 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           13 |     3139 | 2025-11-01 | 8Sins            | W   | 0.394      | 0.309        | 0.007 (0.001)    | 0.135 (0.016)    | 1 (0.394) |     7.98 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           12 |     3146 | 2025-11-01 | Prestige         | L   | 0.393      | -            | -                | -                | -         |    -4.45 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           11 |     3178 | 2025-10-31 | GenOne           | L   | 0.384      | -            | -                | -                | -         |    -1.72 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           10 |     3284 | 2025-10-27 | MOUZ NXT         | W   | 0.359      | 0.344        | 0.034 (0.004)    | 1.000 (0.124)    | 0 (0.000) |    10.98 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            9 |     3330 | 2025-10-26 | kONO             | L   | 0.354      | -            | -                | -                | -         |    -3.42 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            8 |     3382 | 2025-10-25 | 9BOOMPRO         | L   | 0.347      | -            | -                | -                | -         |    -7.97 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            7 |     3389 | 2025-10-25 | Dziuseppe        | W   | 0.346      | 0.344        | 0.002 (0.000)    | 0.064 (0.008)    | 0 (0.000) |     5.64 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            6 |     3433 | 2025-10-24 | Monte            | L   | 0.341      | -            | -                | -                | -         |    -0.23 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            5 |     4419 | 2025-09-27 | BIG              | L   | 0.160      | -            | -                | -                | -         |    -0.11 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            4 |     4440 | 2025-09-27 | fnatic           | L   | 0.158      | -            | -                | -                | -         |    -0.14 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            3 |     4471 | 2025-09-26 | Wildcard         | W   | 0.153      | 0.354        | 0.007 (0.000)    | 0.084 (0.005)    | 1 (0.153) |     2.73 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            2 |     4489 | 2025-09-26 | Friendly Campers | W   | 0.151      | 0.354        | 0.070 (0.004)    | 0.408 (0.022)    | 1 (0.151) |     4.46 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            1 |     5158 | 2025-09-07 | FUT              | L   | 0.026      | -            | -                | -                | -         |    -0.01 | Ayteel, DGL, Kunai, szejn, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($183.77)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-02 |      0.399 | $460.00        | $183.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
