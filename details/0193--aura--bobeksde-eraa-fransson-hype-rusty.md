### Roster Details<br />
Team Name: AURA<br />
Roster: bobeksde, eraa, FRANSSON, hype, RuStY<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [193](../standings_global.md)<br />
Regional Rank: [118]( ../standings_europe.md)<br />
Final Rank Value:  524.2<br />
<br />
Final Rank Value (524.2) = Starting Rank Value (530.0) + Head To Head Adjustments (-5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 530.0
- 400 + ( ( 0.062 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 530.0


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
|           16 |     2489 | 2024-03-27 | Aurora        | L   | 0.494      | -            | -                | -                | -         |    -0.03 | bobeksde, eraa, FRANSSON, hype, RuStY  |
|           15 |     2792 | 2024-03-12 | MOUZ NXT      | L   | 0.393      | -            | -                | -                | -         |    -0.49 | bobeksde, eraa, Golden, Plopski, RuStY |
|           14 |     2829 | 2024-03-10 | FAVBET        | W   | 0.380      | 0.372        | 0.006 (0.001)    | 0.395 (0.056)    | 0 (0.000) |     9.81 | bobeksde, eraa, Golden, Plopski, RuStY |
|           13 |     2853 | 2024-03-09 | BLUDS         | L   | 0.373      | -            | -                | -                | -         |    -7.78 | bobeksde, eraa, Golden, Plopski, RuStY |
|           12 |     2860 | 2024-03-09 | Young Ninjas  | L   | 0.372      | -            | -                | -                | -         |    -1.78 | bobeksde, eraa, Golden, Plopski, RuStY |
|           11 |     2901 | 2024-03-07 | Passion UA    | L   | 0.361      | -            | -                | -                | -         |    -0.65 | bobeksde, eraa, Golden, Plopski, RuStY |
|           10 |     2936 | 2024-03-06 | Zero Tenacity | L   | 0.353      | -            | -                | -                | -         |    -0.43 | bobeksde, eraa, Golden, Plopski, RuStY |
|            9 |     2949 | 2024-03-06 | Slovakia      | L   | 0.351      | -            | -                | -                | -         |    -1.04 | bobeksde, eraa, Golden, Plopski, RuStY |
|            8 |     2979 | 2024-03-05 | Endpoint      | L   | 0.346      | -            | -                | -                | -         |    -1.15 | bobeksde, eraa, Golden, Plopski, RuStY |
|            7 |     2996 | 2024-03-04 | BLEED         | L   | 0.339      | -            | -                | -                | -         |    -0.09 | bobeksde, eraa, Golden, Plopski, RuStY |
|            6 |     3019 | 2024-03-03 | fnatic        | L   | 0.333      | -            | -                | -                | -         |    -0.03 | bobeksde, eraa, Golden, Plopski, RuStY |
|            5 |     3047 | 2024-03-02 | Permitta      | L   | 0.325      | -            | -                | -                | -         |    -0.82 | bobeksde, eraa, Golden, Plopski, RuStY |
|            4 |     3077 | 2024-02-29 | BLEED         | L   | 0.312      | -            | -                | -                | -         |    -0.09 | bobeksde, eraa, Golden, Plopski, RuStY |
|            3 |     3106 | 2024-02-27 | Croatia       | L   | 0.300      | -            | -                | -                | -         |    -5.15 | bobeksde, eraa, Golden, Plopski, RuStY |
|            2 |     3112 | 2024-02-27 | kONO          | L   | 0.299      | -            | -                | -                | -         |    -1.34 | bobeksde, eraa, Golden, Plopski, RuStY |
|            1 |     3526 | 2024-02-08 | Sangal        | W   | 0.173      | 0.143        | 0.231 (0.006)    | 0.853 (0.021)    | 0 (0.000) |     5.29 | bobeksde, eraa, Golden, Plopski, RuStY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
