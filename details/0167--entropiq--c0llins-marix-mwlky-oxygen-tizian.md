### Roster Details<br />
Team Name: Entropiq<br />
Roster: c0llins, Marix, mwlky, oxygeN, tiziaN<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [167](../standings_global.md)<br />
Regional Rank: [106]( ../standings_europe.md)<br />
Final Rank Value:  658.7<br />
<br />
Final Rank Value (658.7) = Starting Rank Value (597.5) + Head To Head Adjustments (61.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.097<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 597.5
- 400 + ( ( 0.097 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 597.5


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
|           28 |     2562 | 2024-03-15 | MOUZ NXT         | L   | 0.568      | -            | -                | -                | -         |    -1.50 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           27 |     2599 | 2024-03-14 | ex-Preasy        | L   | 0.560      | -            | -                | -                | -         |    -2.69 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           26 |     2688 | 2024-03-11 | ECLOT            | W   | 0.540      | 0.371        | 0.107 (0.022)    | 0.478 (0.096)    | 0 (0.000) |    16.28 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           25 |     2705 | 2024-03-10 | ALTERNATE aTTaX  | W   | 0.535      | 0.371        | 0.046 (0.009)    | 0.573 (0.114)    | 0 (0.000) |    14.97 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           24 |     2734 | 2024-03-09 | Alliance         | L   | 0.527      | -            | -                | -                | -         |    -3.11 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           23 |     2749 | 2024-03-08 | Passion UA       | L   | 0.522      | -            | -                | -                | -         |    -1.58 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           22 |     2850 | 2024-03-05 | 500              | L   | 0.501      | -            | -                | -                | -         |    -4.87 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           21 |     2867 | 2024-03-04 | Sashi            | W   | 0.494      | 0.371        | 0.200 (0.037)    | 1.000 (0.183)    | 0 (0.000) |    14.60 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           20 |     2996 | 2024-02-26 | 9INE             | W   | 0.448      | 0.143        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     5.19 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           19 |     3017 | 2024-02-25 | Secret           | W   | 0.441      | 0.358        | 0.000 (0.000)    | 0.108 (0.017)    | 0 (0.000) |     6.23 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           18 |     3067 | 2024-02-23 | Sampi            | L   | 0.427      | -            | -                | -                | -         |    -1.79 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           17 |     3112 | 2024-02-21 | MOUZ NXT         | L   | 0.414      | -            | -                | -                | -         |    -0.81 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           16 |     3199 | 2024-02-17 | The Chosen Few   | W   | 0.390      | 0.358        | 0.002 (0.000)    | 0.137 (0.019)    | 0 (0.000) |     7.67 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           15 |     3349 | 2024-02-11 | ALTERNATE aTTaX  | L   | 0.349      | -            | -                | -                | -         |    -0.94 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           14 |     3422 | 2024-02-05 | Sashi            | L   | 0.308      | -            | -                | -                | -         |    -0.49 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           13 |     3465 | 2024-02-03 | Sangal           | W   | 0.295      | 0.358        | 0.216 (0.023)    | 0.884 (0.094)    | 0 (0.000) |     8.92 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           12 |     3572 | 2024-01-30 | Endpoint         | L   | 0.268      | -            | -                | -                | -         |    -1.28 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           11 |     3575 | 2024-01-30 | ex-Preasy        | L   | 0.267      | -            | -                | -                | -         |    -1.40 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|           10 |     3622 | 2024-01-26 | ALTERNATE aTTaX  | L   | 0.241      | -            | -                | -                | -         |    -0.60 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            9 |     3771 | 2024-01-20 | ex-sYnck         | L   | 0.201      | -            | -                | -                | -         |    -3.97 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            8 |     3813 | 2024-01-19 | EYEBALLERS       | W   | 0.196      | 0.143        | 0.006 (0.000)    | 0.653 (0.018)    | 0 (0.000) |     5.32 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            7 |     3865 | 2024-01-18 | Spirit           | L   | 0.189      | -            | -                | -                | -         |    -0.00 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            6 |     3885 | 2024-01-18 | ex-Preasy        | L   | 0.189      | -            | -                | -                | -         |    -0.99 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            5 |     4200 | 2024-01-09 | fnatic           | L   | 0.131      | -            | -                | -                | -         |    -0.02 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            4 |     4203 | 2024-01-09 | KOI              | L   | 0.131      | -            | -                | -                | -         |    -0.16 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            3 |     4213 | 2024-01-09 | BLEED            | W   | 0.130      | 0.143        | 0.347 (0.006)    | 0.946 (0.018)    | 0 (0.000) |     4.04 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            2 |     4227 | 2024-01-09 | kONO             | W   | 0.129      | 0.143        | 0.033 (0.001)    | 0.395 (0.007)    | 0 (0.000) |     3.20 | c0llins, Marix, mwlky, oxygeN, tiziaN |
|            1 |     4245 | 2024-01-09 | Come on now dawg | W   | 0.129      | -            | -                | -                | -         |     1.01 | c0llins, Marix, mwlky, oxygeN, tiziaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
