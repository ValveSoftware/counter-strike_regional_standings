### Roster Details<br />
Team Name: AURA<br />
Roster: bobeksde, eraa, FRANSSON, hype, RuStY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [195](../standings_global.md)<br />
Regional Rank: [123]( ../standings_europe.md)<br />
Final Rank Value:  523.1<br />
<br />
Final Rank Value (523.1) = Starting Rank Value (528.9) + Head To Head Adjustments (-5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.9
- 400 + ( ( 0.060 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 528.9


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
|           16 |     2653 | 2024-03-27 | Aurora        | L   | 0.454      | -            | -                | -                | -         |    -0.03 | bobeksde, eraa, FRANSSON, hype, RuStY  |
|           15 |     2956 | 2024-03-12 | MOUZ NXT      | L   | 0.354      | -            | -                | -                | -         |    -0.43 | bobeksde, eraa, Golden, Plopski, RuStY |
|           14 |     2993 | 2024-03-10 | FAVBET        | W   | 0.341      | 0.372        | 0.005 (0.001)    | 0.420 (0.053)    | 0 (0.000) |     8.89 | bobeksde, eraa, Golden, Plopski, RuStY |
|           13 |     3017 | 2024-03-09 | BLUDS         | L   | 0.333      | -            | -                | -                | -         |    -6.94 | bobeksde, eraa, Golden, Plopski, RuStY |
|           12 |     3024 | 2024-03-09 | Young Ninjas  | L   | 0.333      | -            | -                | -                | -         |    -1.51 | bobeksde, eraa, Golden, Plopski, RuStY |
|           11 |     3065 | 2024-03-07 | Passion UA    | L   | 0.321      | -            | -                | -                | -         |    -0.55 | bobeksde, eraa, Golden, Plopski, RuStY |
|           10 |     3100 | 2024-03-06 | Zero Tenacity | L   | 0.313      | -            | -                | -                | -         |    -0.38 | bobeksde, eraa, Golden, Plopski, RuStY |
|            9 |     3113 | 2024-03-06 | Sampi         | L   | 0.312      | -            | -                | -                | -         |    -0.85 | bobeksde, eraa, Golden, Plopski, RuStY |
|            8 |     3143 | 2024-03-05 | Endpoint      | L   | 0.307      | -            | -                | -                | -         |    -0.97 | bobeksde, eraa, Golden, Plopski, RuStY |
|            7 |     3160 | 2024-03-04 | BLEED         | L   | 0.299      | -            | -                | -                | -         |    -0.43 | bobeksde, eraa, Golden, Plopski, RuStY |
|            6 |     3183 | 2024-03-03 | fnatic        | L   | 0.294      | -            | -                | -                | -         |    -0.02 | bobeksde, eraa, Golden, Plopski, RuStY |
|            5 |     3211 | 2024-03-02 | Permitta      | L   | 0.286      | -            | -                | -                | -         |    -0.69 | bobeksde, eraa, Golden, Plopski, RuStY |
|            4 |     3241 | 2024-02-29 | BLEED         | L   | 0.272      | -            | -                | -                | -         |    -0.40 | bobeksde, eraa, Golden, Plopski, RuStY |
|            3 |     3270 | 2024-02-27 | Croatia       | L   | 0.260      | -            | -                | -                | -         |    -4.45 | bobeksde, eraa, Golden, Plopski, RuStY |
|            2 |     3276 | 2024-02-27 | kONO          | L   | 0.260      | -            | -                | -                | -         |    -1.10 | bobeksde, eraa, Golden, Plopski, RuStY |
|            1 |     3690 | 2024-02-08 | Sangal        | W   | 0.133      | 0.143        | 0.232 (0.004)    | 0.893 (0.017)    | 0 (0.000) |     4.08 | bobeksde, eraa, Golden, Plopski, RuStY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
