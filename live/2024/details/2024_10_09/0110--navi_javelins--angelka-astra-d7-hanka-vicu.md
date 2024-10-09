### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, ASTRA, D7, Hanka, vicu<br />
Global Rank: [110](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [77]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  812.2<br />
<br />
Final Rank Value (812.2) = Starting Rank Value (749.9) + Head To Head Adjustments (62.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 749.9
- 400 + ( ( 0.181 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 749.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      226 | 2024-10-02 | Spirit fe    | W   | 1.000      | 0.328        | 0.005 (0.002)    | 0.111 (0.036)    | 0 (0.000) |     8.69 | Angelka, ASTRA, D7, Hanka, vicu   |
|           17 |      738 | 2024-09-18 | ENCE Athena  | W   | 1.000      | 0.328        | -                | 0.028 (0.009)    | 0 (0.000) |     6.43 | Angelka, ASTRA, D7, Hanka, vicu   |
|           16 |      822 | 2024-09-15 | Imperial fe  | W   | 1.000      | 0.294        | 0.064 (0.019)    | 0.217 (0.064)    | 0 (0.000) |    20.68 | Angelka, ASTRA, D7, Hanka, vicu   |
|           15 |      850 | 2024-09-14 | NIP Impact   | W   | 1.000      | 0.294        | 0.004 (0.001)    | 0.199 (0.059)    | 0 (0.000) |    13.47 | Angelka, ASTRA, D7, Hanka, vicu   |
|           14 |      860 | 2024-09-14 | Spirit fe    | W   | 1.000      | 0.294        | 0.005 (0.002)    | 0.111 (0.033)    | 0 (0.000) |    10.61 | Angelka, ASTRA, D7, Hanka, vicu   |
|           13 |     1103 | 2024-09-05 | NIP Impact   | L   | 0.975      | -            | -                | -                | -         |   -17.91 | Angelka, ASTRA, D7, Hanka, vicu   |
|           12 |     1297 | 2024-08-29 | Let Her Cook | W   | 0.928      | 0.328        | 0.029 (0.009)    | 0.101 (0.031)    | 0 (0.000) |    15.09 | Angelka, ASTRA, D7, Hanka, vicu   |
|           11 |     3791 | 2024-06-01 | Fluxo Demons | L   | 0.335      | -            | -                | -                | -         |    -5.56 | Angelka, Hanka, LETi, Liina, vicu |
|           10 |     3823 | 2024-05-31 | TSM Impact   | W   | 0.329      | 0.524        | 0.006 (0.001)    | 0.029 (0.005)    | 1 (0.329) |     3.44 | Angelka, Hanka, LETi, Liina, vicu |
|            9 |     3836 | 2024-05-31 | Let Her Cook | L   | 0.327      | -            | -                | -                | -         |    -5.01 | Angelka, Hanka, LETi, Liina, vicu |
|            8 |     4146 | 2024-05-19 | Imperial fe  | W   | 0.247      | 0.281        | 0.064 (0.004)    | 0.217 (0.015)    | 0 (0.000) |     4.88 | Angelka, Hanka, LETi, Liina, vicu |
|            7 |     4152 | 2024-05-19 | BIG EQUIPA   | W   | 0.246      | 0.281        | 0.008 (0.001)    | 0.120 (0.008)    | 0 (0.000) |     3.24 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     4182 | 2024-05-18 | Spirit fe    | W   | 0.239      | 0.281        | 0.005 (0.000)    | 0.111 (0.007)    | 0 (0.000) |     2.89 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     4917 | 2024-04-19 | Crescent fe  | W   | 0.048      | -            | -                | -                | -         |     0.53 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     5044 | 2024-04-16 | Imperial fe  | W   | 0.028      | 0.303        | 0.064 (0.001)    | -                | -         |     0.55 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     5065 | 2024-04-15 | NIP Impact   | W   | 0.021      | -            | -                | -                | -         |     0.26 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     5083 | 2024-04-14 | Astralis W   | W   | 0.013      | -            | -                | -                | -         |     0.08 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     5096 | 2024-04-13 | Imperial fe  | L   | 0.006      | -            | -                | -                | -         |    -0.07 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,982.67)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-15 |      1.000 | $3,000.00      | $3,000.00       |
| 2024-06-02 |      0.342 | $7,000.00      | $2,391.96       |
| 2024-05-19 |      0.247 | $2,000.00      | $494.08         |
| 2024-04-16 |      0.028 | $3,500.00      | $96.63          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
