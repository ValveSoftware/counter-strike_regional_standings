### Roster Details<br />
Team Name: NAVI Javelins<br />
Roster: Angelka, ASTRA, D7, Hanka, vicu<br />
Global Rank: [114](../../standings_global_2024_10_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_15.md)<br />
Regional Rank: [80]( ../../standings_europe_2024_10_15.md)<br />
<br />
Final Rank Value:  804.2<br />
<br />
Final Rank Value (804.2) = Starting Rank Value (743.5) + Head To Head Adjustments (60.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.364[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.031[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.5
- 400 + ( ( 0.177 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 743.5


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
|           14 |      323 | 2024-10-02 | Spirit fe    | W   | 1.000      | 0.328        | 0.005 (0.002)    | 0.109 (0.036)    | 0 (0.000) |     8.91 | Angelka, ASTRA, D7, Hanka, vicu   |
|           13 |      835 | 2024-09-18 | ENCE Athena  | W   | 1.000      | 0.328        | 0.000 (0.000)    | 0.026 (0.009)    | 0 (0.000) |     6.54 | Angelka, ASTRA, D7, Hanka, vicu   |
|           12 |      919 | 2024-09-15 | Imperial fe  | W   | 1.000      | 0.294        | 0.056 (0.017)    | 0.211 (0.062)    | 0 (0.000) |    20.41 | Angelka, ASTRA, D7, Hanka, vicu   |
|           11 |      947 | 2024-09-14 | NIP Impact   | W   | 0.994      | 0.294        | 0.003 (0.001)    | 0.196 (0.057)    | 0 (0.000) |    13.52 | Angelka, ASTRA, D7, Hanka, vicu   |
|           10 |      957 | 2024-09-14 | Spirit fe    | W   | 0.993      | 0.294        | 0.005 (0.001)    | 0.109 (0.032)    | 0 (0.000) |    10.82 | Angelka, ASTRA, D7, Hanka, vicu   |
|            9 |     1200 | 2024-09-05 | NIP Impact   | L   | 0.935      | -            | -                | -                | -         |   -17.04 | Angelka, ASTRA, D7, Hanka, vicu   |
|            8 |     1394 | 2024-08-29 | Let Her Cook | W   | 0.888      | 0.328        | 0.025 (0.007)    | 0.097 (0.028)    | 0 (0.000) |    14.35 | Angelka, ASTRA, D7, Hanka, vicu   |
|            7 |     3888 | 2024-06-01 | Fluxo Demons | L   | 0.296      | -            | -                | -                | -         |    -4.78 | Angelka, Hanka, LETi, Liina, vicu |
|            6 |     3920 | 2024-05-31 | TSM Impact   | W   | 0.290      | 0.524        | 0.005 (0.001)    | 0.024 (0.004)    | 1 (0.290) |     3.07 | Angelka, Hanka, LETi, Liina, vicu |
|            5 |     3933 | 2024-05-31 | Let Her Cook | L   | 0.288      | -            | -                | -                | -         |    -4.43 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     4243 | 2024-05-19 | Imperial fe  | W   | 0.207      | 0.281        | 0.056 (0.003)    | 0.211 (0.012)    | 0 (0.000) |     4.04 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     4249 | 2024-05-19 | BIG EQUIPA   | W   | 0.206      | 0.281        | 0.007 (0.000)    | 0.115 (0.007)    | 0 (0.000) |     2.74 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     4279 | 2024-05-18 | Spirit fe    | W   | 0.200      | 0.281        | 0.005 (0.000)    | 0.109 (0.006)    | 0 (0.000) |     2.46 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     5014 | 2024-04-19 | Crescent fe  | W   | 0.008      | -            | -                | -                | -         |     0.09 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,529.19)
- Divide that value by the 5th highest value among all rosters ($308,815.62)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-15 |      1.000 | $3,000.00      | $2,999.74       |
| 2024-06-02 |      0.302 | $7,000.00      | $2,114.61       |
| 2024-05-19 |      0.207 | $2,000.00      | $414.84         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
