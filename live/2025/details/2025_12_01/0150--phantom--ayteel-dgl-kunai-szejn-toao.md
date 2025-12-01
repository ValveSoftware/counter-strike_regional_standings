### Roster Details<br />
Team Name: Phantom<br />
Roster: Ayteel, DGL, Kunai, szejn, TOAO<br />
Global Rank: [150](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [99]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  753.5<br />
<br />
Final Rank Value (753.5) = Starting Rank Value (807.5) + Head To Head Adjustments (-54.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.254[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.5
- 400 + ( ( 0.214 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 807.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |      249 | 2025-11-20 | Acend             | L   | 1.000      | -            | -                | -                | -         |    -8.76 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           19 |      260 | 2025-11-20 | Haemus            | L   | 1.000      | -            | -                | -                | -         |   -24.60 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           18 |      676 | 2025-11-06 | ALLINNERS         | L   | 1.000      | -            | -                | -                | -         |   -14.69 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           17 |      700 | 2025-11-05 | NOVAQ             | L   | 1.000      | -            | -                | -                | -         |   -12.01 | Ayteel, DGL, Kunai, lunAtic, szejn |
|           16 |      785 | 2025-11-01 | Nemesis           | L   | 1.000      | -            | -                | -                | -         |   -11.46 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           15 |      799 | 2025-11-01 | 8Sins             | W   | 1.000      | 0.309        | 0.003 (0.001)    | 0.084 (0.026)    | 1 (1.000) |     9.43 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           14 |      806 | 2025-11-01 | Prestige          | L   | 0.999      | -            | -                | -                | -         |   -22.09 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           13 |      838 | 2025-10-31 | GenOne            | L   | 0.991      | -            | -                | -                | -         |   -10.64 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           12 |      944 | 2025-10-27 | MOUZ NXT          | W   | 0.966      | 0.344        | 0.003 (0.001)    | 0.328 (0.109)    | 0 (0.000) |    16.82 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           11 |      990 | 2025-10-26 | kONO              | L   | 0.960      | -            | -                | -                | -         |    -9.34 | Ayteel, DGL, Kunai, szejn, TOAO    |
|           10 |     1042 | 2025-10-25 | 9BOOMPRO          | L   | 0.954      | -            | -                | -                | -         |   -12.09 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            9 |     1049 | 2025-10-25 | Dziuseppe         | W   | 0.953      | 0.344        | 0.004 (0.001)    | 0.298 (0.098)    | 0 (0.000) |    12.77 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            8 |     1093 | 2025-10-24 | Monte             | L   | 0.947      | -            | -                | -                | -         |    -2.85 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            7 |     2079 | 2025-09-27 | BIG               | L   | 0.766      | -            | -                | -                | -         |    -1.52 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            6 |     2100 | 2025-09-27 | fnatic            | L   | 0.764      | -            | -                | -                | -         |    -0.90 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            5 |     2131 | 2025-09-26 | Wildcard          | W   | 0.759      | 0.354        | 0.026 (0.007)    | 0.535 (0.144)    | 1 (0.759) |    18.11 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            4 |     2149 | 2025-09-26 | Friendly Campers  | W   | 0.758      | 0.354        | 0.117 (0.031)    | 0.936 (0.251)    | 1 (0.758) |    22.07 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            3 |     2818 | 2025-09-07 | FUT               | L   | 0.632      | -            | -                | -                | -         |    -0.38 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            2 |     4481 | 2025-06-14 | Johnny Speeds     | L   | 0.066      | -            | -                | -                | -         |    -1.80 | Ayteel, DGL, Kunai, szejn, TOAO    |
|            1 |     4502 | 2025-06-13 | Ninjas in Pyjamas | L   | 0.061      | -            | -                | -                | -         |    -0.09 | Ayteel, DGL, Kunai, szejn, TOAO    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($460.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-02 |      1.000 | $460.00        | $460.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
