### Roster Details<br />
Team Name: TSM<br />
Roster: interz, joel, KWERTZZ, valde, Zyphon<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [140](../standings_global.md)<br />
Regional Rank: [90]( ../standings_europe.md)<br />
Final Rank Value:  746.5<br />
<br />
Final Rank Value (746.5) = Starting Rank Value (728.6) + Head To Head Adjustments (18.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 728.6
- 400 + ( ( 0.156 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 728.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1865 | 2024-04-19 | Sangal            | L   | 0.647      | -            | -                | -                | -         |    -2.05 | interz, joel, KWERTZZ, valde, Zyphon |
|           17 |     2121 | 2024-04-10 | FORZE             | L   | 0.587      | -            | -                | -                | -         |    -3.00 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           16 |     2179 | 2024-04-09 | Betera            | W   | 0.580      | 0.500        | 0.008 (0.002)    | 0.059 (0.017)    | 0 (0.000) |     9.78 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|           15 |     2310 | 2024-04-04 | 9 Pandas          | L   | 0.547      | -            | -                | -                | -         |    -1.77 | joel, KWERTZZ, poizon, valde, Zyphon |
|           14 |     2389 | 2024-04-02 | KOI               | L   | 0.534      | -            | -                | -                | -         |    -1.43 | joel, KWERTZZ, poizon, valde, Zyphon |
|           13 |     2449 | 2024-03-28 | 9INE              | W   | 0.501      | 0.500        | 0.000 (0.000)    | 0.082 (0.020)    | 0 (0.000) |     3.75 | joel, KWERTZZ, poizon, valde, Zyphon |
|           12 |     2606 | 2024-03-20 | VP.Prodigy        | L   | 0.446      | -            | -                | -                | -         |    -4.12 | joel, KWERTZZ, poizon, valde, Zyphon |
|           11 |     2717 | 2024-03-14 | EYEBALLERS        | W   | 0.408      | 0.500        | 0.009 (0.002)    | 0.646 (0.132)    | 0 (0.000) |     9.69 | interz, joel, MoDo, valde, Zyphon    |
|           10 |     2929 | 2024-03-06 | Sangal            | L   | 0.354      | -            | -                | -                | -         |    -1.01 | interz, JACKZ, joel, poizon, valde   |
|            9 |     3010 | 2024-03-03 | The Chosen Few    | L   | 0.334      | -            | -                | -                | -         |    -5.82 | joel, KWERTZZ, poizon, valde, Zyphon |
|            8 |     3022 | 2024-03-03 | Romania           | W   | 0.333      | 0.143        | 0.011 (0.001)    | 0.375 (0.018)    | 0 (0.000) |     6.91 | joel, KWERTZZ, poizon, valde, Zyphon |
|            7 |     3530 | 2024-02-08 | ex-Preasy         | L   | 0.171      | -            | -                | -                | -         |    -1.74 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            6 |     3534 | 2024-02-07 | Gaimin Gladiators | L   | 0.165      | -            | -                | -                | -         |    -0.50 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            5 |     3554 | 2024-02-05 | Metizport         | W   | 0.152      | 0.371        | 0.065 (0.004)    | 0.489 (0.028)    | 0 (0.000) |     3.77 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            4 |     3607 | 2024-02-03 | ALTERNATE aTTaX   | W   | 0.139      | 0.371        | 0.050 (0.003)    | 0.577 (0.030)    | 0 (0.000) |     3.78 | joel, KWERTZZ, MoDo, valde, Zyphon   |
|            3 |     3687 | 2024-01-31 | GODSENT           | W   | 0.118      | 0.371        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.80 | interz, joel, KWERTZZ, MoDo, valde   |
|            2 |     3739 | 2024-01-27 | MOUZ NXT          | W   | 0.091      | 0.371        | 0.152 (0.005)    | 1.000 (0.034)    | 0 (0.000) |     2.57 | interz, joel, KWERTZZ, MoDo, valde   |
|            1 |     3812 | 2024-01-23 | GODSENT           | L   | 0.065      | -            | -                | -                | -         |    -1.61 | interz, joel, KWERTZZ, MoDo, valde   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,511.01)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $2,000.00      | $1,974.43       |
| 2024-02-09 |      0.179 | $3,000.00      | $536.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
