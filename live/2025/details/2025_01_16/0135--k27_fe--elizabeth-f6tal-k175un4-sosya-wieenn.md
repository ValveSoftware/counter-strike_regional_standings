### Roster Details<br />
Team Name: K27 fe<br />
Roster: Elizabeth, f6tal, k175un4, sosya, wieenN<br />
Global Rank: [135](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [96]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  762.7<br />
<br />
Final Rank Value (762.7) = Starting Rank Value (738.2) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.315[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.171<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.2
- 400 + ( ( 0.171 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 738.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      663 | 2024-11-22 | NIP Impact    | L   | 0.832      | -            | -                | -                | -         |   -12.01 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|           13 |      673 | 2024-11-22 | FURIA fe      | L   | 0.831      | -            | -                | -                | -         |    -1.73 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|           12 |     1376 | 2024-10-19 | NAVI Javelins | W   | 0.606      | 0.328        | 0.293 (0.058)    | 0.382 (0.076)    | 0 (0.000) |    17.86 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|           11 |     1407 | 2024-10-18 | Permitta W    | W   | 0.599      | 0.328        | 0.007 (0.001)    | 0.056 (0.011)    | 0 (0.000) |     6.72 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|           10 |     1777 | 2024-10-03 | BIG EQUIPA    | L   | 0.499      | -            | -                | -                | -         |    -5.65 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            9 |     2327 | 2024-09-18 | Crescent fe   | W   | 0.399      | 0.328        | 0.004 (0.001)    | 0.028 (0.004)    | 0 (0.000) |     4.30 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            8 |     2445 | 2024-09-14 | Imperial fe   | L   | 0.371      | -            | -                | -                | -         |    -0.76 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            7 |     2455 | 2024-09-14 | BIG EQUIPA    | W   | 0.370      | 0.294        | 0.048 (0.005)    | 0.130 (0.014)    | 0 (0.000) |     7.61 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            6 |     2501 | 2024-09-12 | HSG fe        | W   | 0.359      | 0.328        | 0.005 (0.001)    | 0.068 (0.008)    | 0 (0.000) |     4.70 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            5 |     2740 | 2024-09-04 | Imperial fe   | L   | 0.306      | -            | -                | -                | -         |    -0.59 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            4 |     3368 | 2024-08-18 | Spirit fe     | W   | 0.191      | 0.250        | 0.008 (0.000)    | 0.098 (0.005)    | 0 (0.000) |     2.45 | Elizabeth, k175un4, Margo, sosya, wieenN |
|            3 |     3737 | 2024-08-06 | HSG fe        | W   | 0.112      | 0.143        | 0.005 (0.000)    | 0.068 (0.001)    | 0 (0.000) |     1.47 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            2 |     4285 | 2024-07-21 | France fe     | W   | 0.005      | 0.294        | 0.137 (0.000)    | 0.151 (0.000)    | 0 (0.000) |     0.12 | Elizabeth, f6tal, k175un4, sosya, wieenN |
|            1 |     4291 | 2024-07-21 | Spirit fe     | W   | 0.004      | 0.294        | 0.008 (0.000)    | 0.098 (0.000)    | 0 (0.000) |     0.05 | Elizabeth, f6tal, k175un4, sosya, wieenN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,538.63)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.845 | $4,000.00      | $3,381.09       |
| 2024-08-18 |      0.191 | $750.00        | $143.33         |
| 2024-07-21 |      0.005 | $3,000.00      | $14.21          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
