### Roster Details<br />
Team Name: PARIVISION<br />
Roster: BELCHONOKK, Jame, nota, Qikert, TRAVIS<br />
Global Rank: [78](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_03.md)<br />
Regional Rank: [52]( ../../standings_europe_2025_03_03.md)<br />
<br />
Final Rank Value:  845.3<br />
<br />
Final Rank Value (845.3) = Starting Rank Value (608.2) + Head To Head Adjustments (237.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 608.2
- 400 + ( ( 0.108 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 608.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       17 | 2025-03-01 | Aurora             | W   | 1.000      | 0.143        | 0.019 (0.003)    | 0.482 (0.069)    | 0 (0.000) |    14.71 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           13 |       22 | 2025-02-28 | BC.Game            | W   | 1.000      | 0.143        | 0.076 (0.011)    | 0.906 (0.129)    | 0 (0.000) |    25.35 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           12 |       28 | 2025-02-27 | Alliance           | L   | 1.000      | -            | -                | -                | -         |   -15.10 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           11 |       40 | 2025-02-26 | BC.Game            | W   | 1.000      | 0.143        | 0.076 (0.011)    | 0.906 (0.129)    | 0 (0.000) |    26.20 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|           10 |       72 | 2025-02-24 | RUSH B             | W   | 1.000      | 0.143        | 0.027 (0.004)    | 0.578 (0.083)    | 0 (0.000) |    16.84 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            9 |      172 | 2025-02-20 | Ninjas in Pyjamas  | W   | 1.000      | 0.143        | -                | 0.474 (0.068)    | 0 (0.000) |    11.07 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            8 |      186 | 2025-02-19 | Rhyno              | W   | 1.000      | 0.143        | 0.013 (0.002)    | 0.259 (0.037)    | 0 (0.000) |    16.87 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            7 |      423 | 2025-02-09 | Astralis           | L   | 1.000      | -            | -                | -                | -         |    -0.15 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            6 |      432 | 2025-02-09 | HEROIC             | W   | 1.000      | 0.143        | 0.129 (0.018)    | 0.509 (0.073)    | 0 (0.000) |    27.67 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            5 |      493 | 2025-02-08 | GamerLegion        | W   | 1.000      | 0.143        | 0.174 (0.025)    | 0.640 (0.091)    | 0 (0.000) |    31.16 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            4 |      525 | 2025-02-07 | B8                 | W   | 1.000      | 0.143        | 0.123 (0.018)    | 0.735 (0.105)    | 0 (0.000) |    29.07 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            3 |      551 | 2025-02-06 | Nemiga             | W   | 1.000      | 0.143        | 0.171 (0.024)    | 0.380 (0.054)    | 0 (0.000) |    27.23 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            2 |      576 | 2025-02-05 | B8                 | L   | 1.000      | -            | -                | -                | -         |    -1.90 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |
|            1 |      591 | 2025-02-05 | Imperial Valkyries | W   | 1.000      | 0.143        | 0.134 (0.019)    | -                | -         |    28.06 | BELCHONOKK, Jame, nota, Qikert, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
