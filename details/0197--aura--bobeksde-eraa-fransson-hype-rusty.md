### Roster Details<br />
Team Name: AURA<br />
Roster: bobeksde, eraa, FRANSSON, hype, RuStY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [197](../standings_global.md)<br />
Regional Rank: [123]( ../standings_europe.md)<br />
Final Rank Value:  508.0<br />
<br />
Final Rank Value (508.0) = Starting Rank Value (514.2) + Head To Head Adjustments (-6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.2
- 400 + ( ( 0.056 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 514.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2941 | 2024-03-27 | Aurora        | L   | 0.407      | -            | -                | -                | -         |    -0.03 | bobeksde, eraa, FRANSSON, hype, RuStY  |
|           15 |     3244 | 2024-03-12 | MOUZ NXT      | L   | 0.306      | -            | -                | -                | -         |    -0.43 | bobeksde, eraa, Golden, Plopski, RuStY |
|           14 |     3281 | 2024-03-10 | FAVBET        | W   | 0.294      | 0.372        | 0.005 (0.000)    | 0.390 (0.043)    | 0 (0.000) |     7.52 | bobeksde, eraa, Golden, Plopski, RuStY |
|           13 |     3305 | 2024-03-09 | BLUDS         | L   | 0.286      | -            | -                | -                | -         |    -5.80 | bobeksde, eraa, Golden, Plopski, RuStY |
|           12 |     3312 | 2024-03-09 | Young Ninjas  | L   | 0.286      | -            | -                | -                | -         |    -1.52 | bobeksde, eraa, Golden, Plopski, RuStY |
|           11 |     3353 | 2024-03-07 | Passion UA    | L   | 0.274      | -            | -                | -                | -         |    -0.33 | bobeksde, eraa, Golden, Plopski, RuStY |
|           10 |     3388 | 2024-03-06 | Zero Tenacity | L   | 0.266      | -            | -                | -                | -         |    -0.30 | bobeksde, eraa, Golden, Plopski, RuStY |
|            9 |     3401 | 2024-03-06 | Sampi         | L   | 0.264      | -            | -                | -                | -         |    -0.84 | bobeksde, eraa, Golden, Plopski, RuStY |
|            8 |     3431 | 2024-03-05 | Endpoint      | L   | 0.259      | -            | -                | -                | -         |    -0.86 | bobeksde, eraa, Golden, Plopski, RuStY |
|            7 |     3448 | 2024-03-04 | BLEED         | L   | 0.252      | -            | -                | -                | -         |    -0.48 | bobeksde, eraa, Golden, Plopski, RuStY |
|            6 |     3471 | 2024-03-03 | fnatic        | L   | 0.246      | -            | -                | -                | -         |    -0.02 | bobeksde, eraa, Golden, Plopski, RuStY |
|            5 |     3499 | 2024-03-02 | Permitta      | L   | 0.238      | -            | -                | -                | -         |    -0.62 | bobeksde, eraa, Golden, Plopski, RuStY |
|            4 |     3529 | 2024-02-29 | BLEED         | L   | 0.225      | -            | -                | -                | -         |    -0.44 | bobeksde, eraa, Golden, Plopski, RuStY |
|            3 |     3558 | 2024-02-27 | Croatia       | L   | 0.213      | -            | -                | -                | -         |    -3.58 | bobeksde, eraa, Golden, Plopski, RuStY |
|            2 |     3564 | 2024-02-27 | kONO          | L   | 0.213      | -            | -                | -                | -         |    -1.01 | bobeksde, eraa, Golden, Plopski, RuStY |
|            1 |     3978 | 2024-02-08 | Sangal        | W   | 0.086      | 0.143        | 0.195 (0.002)    | 0.860 (0.011)    | 0 (0.000) |     2.61 | bobeksde, eraa, Golden, Plopski, RuStY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
