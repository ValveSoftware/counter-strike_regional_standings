### Roster Details<br />
Team Name: MIBR fe<br />
Roster: Babs, Dani, GaBi, hera, showliana<br />
Global Rank: [195](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_03.md)<br />
Regional Rank: [54]( ../../standings_americas_2025_03_03.md)<br />
<br />
Final Rank Value:  633.1<br />
<br />
Final Rank Value (633.1) = Starting Rank Value (630.4) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 630.4
- 400 + ( ( 0.120 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 630.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1195 | 2024-11-30 | Fluxo Demons       | L   | 0.581      | -            | -                | -                | -         |    -6.69 | Babs, Dani, GaBi, hera, showliana |
|           11 |     1229 | 2024-11-29 | Imperial Valkyries | L   | 0.574      | -            | -                | -                | -         |    -1.94 | Babs, Dani, GaBi, hera, showliana |
|           10 |     2099 | 2024-10-18 | inSanitY fe        | W   | 0.295      | 0.323        | 0.001 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     4.25 | Babs, Dani, GaBi, Jelly, lexy     |
|            9 |     2530 | 2024-10-02 | FURIA fe           | L   | 0.188      | -            | -                | -                | -         |    -0.75 | Babs, Dani, GaBi, khizha, lexy    |
|            8 |     2642 | 2024-09-29 | FURIA fe           | L   | 0.168      | -            | -                | -                | -         |    -0.68 | Babs, Dani, GaBi, khizha, REGIANE |
|            7 |     2672 | 2024-09-28 | thekillaz fe       | W   | 0.162      | 0.307        | 0.001 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     2.33 | Babs, Dani, GaBi, khizha, REGIANE |
|            6 |     2821 | 2024-09-25 | thekillaz fe       | W   | 0.141      | 0.323        | 0.001 (0.000)    | 0.024 (0.001)    | 0 (0.000) |     2.05 | Babs, Dani, GaBi, khizha, REGIANE |
|            5 |     2910 | 2024-09-23 | Atrix              | W   | 0.129      | 0.307        | 0.001 (0.000)    | 0.034 (0.001)    | 0 (0.000) |     1.96 | Babs, Dani, GaBi, khizha, REGIANE |
|            4 |     2916 | 2024-09-23 | PEAK fe            | W   | 0.128      | 0.307        | 0.001 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     1.83 | Babs, Dani, GaBi, khizha, REGIANE |
|            3 |     3066 | 2024-09-18 | CAPIVARAS          | W   | 0.095      | 0.323        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.04 | Babs, Dani, GaBi, khizha, REGIANE |
|            2 |     3276 | 2024-09-11 | Fluxo Demons       | L   | 0.048      | -            | -                | -                | -         |    -0.53 | Babs, Dani, GaBi, khizha, REGIANE |
|            1 |     3435 | 2024-09-05 | Atrix              | L   | 0.008      | -            | -                | -                | -         |    -0.14 | Babs, Dani, GaBi, khizha, REGIANE |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,349.82)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-01 |      0.589 | $862.00        | $507.47         |
| 2024-10-18 |      0.295 | $1,800.00      | $530.89         |
| 2024-09-29 |      0.168 | $1,850.00      | $311.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
