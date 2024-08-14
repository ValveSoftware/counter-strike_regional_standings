### Roster Details<br />
Team Name: Akimbo<br />
Roster: hyza, kmrn, laxiee, N2o, obi<br />
Global Rank: [145](../standings_global.md)<br />
<br />
Region: [Asia]( ../standings_asia.md)<br />
Regional Rank: [13]( ../standings_asia.md)<br />
<br />
Final Rank Value:  722.5<br />
<br />
Final Rank Value (722.5) = Starting Rank Value (712.8) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 712.8
- 400 + ( ( 0.159 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 712.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |       70 | 2024-08-12 | NRG              | L   | 1.000      | -            | -                | -                | -         |    -4.99 | hyza, kmrn, laxiee, N2o, obi          |
|           21 |      123 | 2024-08-10 | DETONATE         | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.145 (0.054)    | 0 (0.000) |     8.93 | hyza, kmrn, laxiee, N2o, obi          |
|           20 |      210 | 2024-08-07 | Vibe             | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.038 (0.014)    | 0 (0.000) |     4.65 | hyza, kmrn, laxiee, N2o, obi          |
|           19 |      560 | 2024-07-29 | jahsdnmasjdm     | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.43 | arviast, hyza, laxiee, N2o, obi       |
|           18 |      640 | 2024-07-26 | undefined        | L   | 1.000      | -            | -                | -                | -         |   -22.68 | hyza, kmrn, laxiee, N2o, obi          |
|           17 |     1318 | 2024-06-16 | E-Xolos LAZER    | L   | 0.808      | -            | -                | -                | -         |   -11.18 | calamity, kralz , laxiee, N2o, obi    |
|           16 |     1345 | 2024-06-15 | Take Flyte       | L   | 0.802      | -            | -                | -                | -         |   -15.16 | calamity, kralz , laxiee, N2o, obi    |
|           15 |     1351 | 2024-06-15 | Legacy           | L   | 0.800      | -            | -                | -                | -         |    -5.64 | calamity, kralz , laxiee, N2o, obi    |
|           14 |     1381 | 2024-06-14 | Homyno           | W   | 0.795      | 0.143        | 0.006 (0.001)    | 0.181 (0.021)    | 0 (0.000) |     9.25 | calamity, kralz , laxiee, N2o, obi    |
|           13 |     1387 | 2024-06-14 | Phoenix          | W   | 0.794      | 0.371        | 0.004 (0.001)    | 0.287 (0.084)    | 0 (0.000) |    11.70 | calamity, kralz , laxiee, N2o, obi    |
|           12 |     1498 | 2024-06-10 | Legacy           | L   | 0.768      | -            | -                | -                | -         |    -5.26 | calamity, kralz , laxiee, N2o, obi    |
|           11 |     1532 | 2024-06-09 | E-Xolos LAZER    | W   | 0.762      | 0.368        | 0.010 (0.003)    | 0.439 (0.123)    | 0 (0.000) |    12.55 | calamity, kralz , laxiee, N2o, obi    |
|           10 |     1704 | 2024-06-06 | FLUFFY AIMERS    | W   | 0.742      | 0.371        | 0.003 (0.001)    | 0.373 (0.102)    | 0 (0.000) |    10.60 | calamity, kralz , laxiee, N2o, obi    |
|            9 |     1715 | 2024-06-06 | Legacy           | L   | 0.741      | -            | -                | -                | -         |    -5.08 | calamity, kralz , laxiee, N2o, obi    |
|            8 |     1831 | 2024-06-04 | Final Form       | W   | 0.728      | 0.371        | 0.002 (0.001)    | 0.059 (0.016)    | 0 (0.000) |     8.60 | calamity, kralz , laxiee, N2o, obi    |
|            7 |     1867 | 2024-06-03 | Villainous       | W   | 0.722      | 0.368        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.02 | calamity, kralz , laxiee, N2o, obi    |
|            6 |     2221 | 2024-05-20 | Party Astronauts | L   | 0.629      | -            | -                | -                | -         |    -5.05 | calamity, kralz , laxiee, N2o, obi    |
|            5 |     3121 | 2024-04-17 | Liquid           | L   | 0.408      | -            | -                | -                | -         |    -0.06 | calamity, kralz , laxiee, N2o, obi    |
|            4 |     3125 | 2024-04-17 | NRG              | W   | 0.407      | 0.143        | 0.031 (0.002)    | 0.580 (0.034)    | 0 (0.000) |     8.99 | calamity, kralz , laxiee, N2o, obi    |
|            3 |     4346 | 2024-02-24 | Wildcard         | L   | 0.054      | -            | -                | -                | -         |    -0.44 | C4LLM3SU3, calamity, laxiee, N2o, obi |
|            2 |     4457 | 2024-02-19 | Mythic           | L   | 0.022      | -            | -                | -                | -         |    -0.28 | C4LLM3SU3, calamity, laxiee, N2o, obi |
|            1 |     4459 | 2024-02-19 | Party Astronauts | L   | 0.021      | -            | -                | -                | -         |    -0.17 | C4LLM3SU3, calamity, laxiee, N2o, obi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,910.53)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.808 | $750.00        | $606.34         |
| 2024-06-10 |      0.768 | $4,300.00      | $3,304.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
