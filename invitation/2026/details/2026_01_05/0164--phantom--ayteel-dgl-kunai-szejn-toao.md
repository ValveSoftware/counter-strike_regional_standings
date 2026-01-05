### Roster Details<br />
Team Name: Phantom<br />
Roster: Ayteel, DGL, Kunai, szejn, TOAO<br />
Global Rank: [164](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [112]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  756.6<br />
<br />
Final Rank Value (756.6) = Starting Rank Value (783.1) + Head To Head Adjustments (-26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.052[<sup>2</sup>](#table1)
- LAN Wins: 0.192[<sup>2</sup>](#table1)

The average of these factors is 0.193<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 783.1
- 400 + ( ( 0.193 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 783.1


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
|           18 |      786 | 2025-11-20 | Acend            | L   | 0.892      | -            | -                | -                | -         |    -4.97 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           17 |      797 | 2025-11-20 | Haemus           | L   | 0.891      | -            | -                | -                | -         |   -21.93 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           16 |     1236 | 2025-11-06 | ALLINNERS        | L   | 0.799      | -            | -                | -                | -         |   -12.19 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           15 |     1260 | 2025-11-05 | NOVAQ            | L   | 0.792      | -            | -                | -                | -         |    -7.19 | Ayteel, DGL, Kunai, lunAtic, szejn |
|           14 |     1345 | 2025-11-01 | Nemesis          | L   | 0.769      | -            | -                | -                | -         |    -7.02 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           13 |     1359 | 2025-11-01 | 8Sins            | W   | 0.767      | 0.309        | 0.005 (0.001)    | 0.065 (0.015)    | 1 (0.767) |     8.03 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           12 |     1366 | 2025-11-01 | Prestige         | L   | 0.766      | -            | -                | -                | -         |   -16.64 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           11 |     1398 | 2025-10-31 | GenOne           | L   | 0.758      | -            | -                | -                | -         |    -4.43 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           10 |     1504 | 2025-10-27 | MOUZ NXT         | W   | 0.733      | 0.344        | 0.011 (0.003)    | 0.832 (0.210)    | 0 (0.000) |    21.35 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            9 |     1550 | 2025-10-26 | kONO             | L   | 0.727      | -            | -                | -                | -         |    -7.32 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            8 |     1602 | 2025-10-25 | 9BOOMPRO         | L   | 0.720      | -            | -                | -                | -         |    -9.80 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            7 |     1609 | 2025-10-25 | Dziuseppe        | W   | 0.720      | 0.344        | 0.004 (0.001)    | 0.209 (0.052)    | 0 (0.000) |    10.27 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            6 |     1653 | 2025-10-24 | Monte            | L   | 0.714      | -            | -                | -                | -         |    -1.81 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            5 |     2639 | 2025-09-27 | BIG              | L   | 0.533      | -            | -                | -                | -         |    -0.83 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            4 |     2660 | 2025-09-27 | fnatic           | L   | 0.531      | -            | -                | -                | -         |    -0.35 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            3 |     2691 | 2025-09-26 | Wildcard         | W   | 0.526      | 0.354        | 0.022 (0.004)    | 0.376 (0.070)    | 1 (0.526) |    12.30 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            2 |     2709 | 2025-09-26 | Friendly Campers | W   | 0.525      | 0.354        | 0.109 (0.020)    | 0.932 (0.173)    | 1 (0.525) |    16.11 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            1 |     3378 | 2025-09-07 | FUT              | L   | 0.399      | -            | -                | -                | -         |    -0.14 | Ayteel, DGL, Kunai, szejn, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($355.55)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-02 |      0.773 | $460.00        | $355.55         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
