### Roster Details<br />
Team Name: brazylijski luz<br />
Roster: POLO, Prism, Qlocuu, swiz, virtuoso<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [109](../standings_global.md)<br />
Regional Rank: [74]( ../standings_europe.md)<br />
Final Rank Value:  848.6<br />
<br />
Final Rank Value (848.6) = Starting Rank Value (813.6) + Head To Head Adjustments (35.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.340[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 813.6
- 400 + ( ( 0.196 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 813.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      675 | 2024-06-04 | The Prodigies     | L   | 0.953      | -            | -                | -                | -         |   -24.90 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           25 |      707 | 2024-06-03 | Johnny Speeds     | L   | 0.946      | -            | -                | -                | -         |    -2.23 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           24 |      732 | 2024-06-02 | Serbia            | L   | 0.939      | -            | -                | -                | -         |   -16.13 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           23 |      823 | 2024-05-30 | Enterprise        | W   | 0.918      | 0.371        | 0.053 (0.018)    | 0.654 (0.222)    | 0 (0.000) |    17.98 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           22 |      841 | 2024-05-29 | SINNERS           | L   | 0.913      | -            | -                | -                | -         |    -6.98 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           21 |      889 | 2024-05-27 | Entropiq          | W   | 0.898      | -            | -                | -                | 0 (0.000) |     1.77 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           20 |      949 | 2024-05-23 | GL Academy        | W   | 0.874      | 0.379        | 0.012 (0.004)    | 0.136 (0.045)    | 0 (0.000) |    11.02 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           19 |      960 | 2024-05-23 | Zero Tenacity     | L   | 0.871      | -            | -                | -                | -         |    -5.26 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           18 |     1490 | 2024-05-06 | Grannys Knockers  | L   | 0.758      | -            | -                | -                | -         |   -14.04 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           17 |     1648 | 2024-04-28 | VP.Prodigy        | W   | 0.706      | 0.396        | 0.038 (0.011)    | 0.519 (0.145)    | 0 (0.000) |    12.01 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           16 |     1657 | 2024-04-28 | Romania           | W   | 0.705      | 0.396        | 0.011 (0.003)    | 0.375 (0.105)    | 0 (0.000) |    11.04 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           15 |     1821 | 2024-04-20 | Sangal            | L   | 0.654      | -            | -                | -                | -         |    -3.61 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           14 |     1863 | 2024-04-19 | Rebels            | W   | 0.647      | 0.500        | 0.053 (0.017)    | 0.551 (0.178)    | 0 (0.000) |    15.80 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           13 |     1909 | 2024-04-18 | BetBoom           | L   | 0.640      | -            | -                | -                | -         |    -0.34 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           12 |     1915 | 2024-04-18 | Ninjas in Pyjamas | W   | 0.640      | 0.143        | 0.340 (0.031)    | 0.512 (0.047)    | 0 (0.000) |    20.02 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           11 |     2120 | 2024-04-10 | Betera            | W   | 0.587      | 0.500        | 0.008 (0.002)    | 0.059 (0.017)    | 0 (0.000) |     7.55 | POLO, Prism, Qlocuu, swiz, virtuoso |
|           10 |     2173 | 2024-04-09 | FORZE             | L   | 0.581      | -            | -                | -                | -         |    -4.28 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            9 |     2451 | 2024-03-28 | Aurora            | L   | 0.500      | -            | -                | -                | -         |    -0.15 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            8 |     2718 | 2024-03-14 | Rebels            | W   | 0.408      | 0.500        | 0.053 (0.011)    | 0.551 (0.112)    | 0 (0.000) |    10.45 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            7 |     2809 | 2024-03-11 | SINNERS           | W   | 0.387      | 0.500        | 0.057 (0.011)    | 0.767 (0.148)    | 0 (0.000) |    10.18 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            6 |     2925 | 2024-03-06 | ALTERNATE aTTaX   | L   | 0.354      | -            | -                | -                | -         |    -2.44 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            5 |     3044 | 2024-03-02 | Sashi             | L   | 0.326      | -            | -                | -                | -         |    -1.45 | Furlan, phr, POLO, Prism, Qlocuu    |
|            4 |     3110 | 2024-02-27 | Spirit Academy    | L   | 0.300      | -            | -                | -                | -         |    -7.70 | POLO, Prism, Qlocuu, swiz, virtuoso |
|            3 |     3185 | 2024-02-24 | The Chosen Few    | W   | 0.279      | -            | -                | -                | -         |     2.94 | Furlan, phr, POLO, Prism, Qlocuu    |
|            2 |     3315 | 2024-02-18 | ARCRED            | W   | 0.240      | 0.358        | 0.055 (0.005)    | 0.365 (0.031)    | -         |     4.69 | Furlan, phr, POLO, Prism, Qlocuu    |
|            1 |     3568 | 2024-02-04 | ALTERNATE aTTaX   | L   | 0.147      | -            | -                | -                | -         |    -0.94 | Furlan, phr, POLO, Prism, Qlocuu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,961.65)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
