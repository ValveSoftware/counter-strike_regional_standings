### Roster Details<br />
Team Name: MIBR fe<br />
Roster: Babs, Dani, GaBi, hera, showliana<br />
Global Rank: [153](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2024_12_02.md)<br />
Regional Rank: [38]( ../../standings_americas_2024_12_02.md)<br />
<br />
Final Rank Value:  729.3<br />
<br />
Final Rank Value (729.3) = Starting Rank Value (691.9) + Head To Head Adjustments (37.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.233[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 691.9
- 400 + ( ( 0.145 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 691.9


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
|           14 |       38 | 2024-11-30 | Fluxo Demons | L   | 1.000      | -            | -                | -                | -         |    -9.88 | Babs, Dani, GaBi, hera, showliana |
|           13 |       72 | 2024-11-29 | Imperial fe  | L   | 1.000      | -            | -                | -                | -         |    -1.39 | Babs, Dani, GaBi, hera, showliana |
|           12 |      929 | 2024-10-18 | inSanitY fe  | W   | 0.902      | 0.323        | 0.003 (0.001)    | 0.109 (0.032)    | 0 (0.000) |    11.70 | Babs, Dani, GaBi, Jelly, lexy     |
|           11 |     1335 | 2024-10-02 | FURIA fe     | L   | 0.795      | -            | -                | -                | -         |    -1.10 | Babs, Dani, GaBi, khizha, lexy    |
|           10 |     1438 | 2024-09-29 | FURIA fe     | L   | 0.775      | -            | -                | -                | -         |    -1.09 | Babs, Dani, GaBi, khizha, REGIANE |
|            9 |     1468 | 2024-09-28 | thekillaz fe | W   | 0.769      | 0.307        | 0.003 (0.001)    | 0.085 (0.020)    | 0 (0.000) |     9.93 | Babs, Dani, GaBi, khizha, REGIANE |
|            8 |     1614 | 2024-09-25 | thekillaz fe | W   | 0.748      | 0.323        | 0.003 (0.001)    | 0.085 (0.020)    | 0 (0.000) |     9.91 | Babs, Dani, GaBi, khizha, REGIANE |
|            7 |     1698 | 2024-09-23 | Atrix        | W   | 0.736      | 0.307        | 0.004 (0.001)    | 0.136 (0.031)    | 0 (0.000) |    11.42 | Babs, Dani, GaBi, khizha, REGIANE |
|            6 |     1704 | 2024-09-23 | PEAK fe      | W   | 0.735      | 0.307        | 0.003 (0.001)    | 0.034 (0.008)    | 0 (0.000) |     8.83 | Babs, Dani, GaBi, khizha, REGIANE |
|            5 |     1850 | 2024-09-18 | CAPIVARAS    | W   | 0.702      | 0.323        | 0.003 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     6.36 | Babs, Dani, GaBi, khizha, REGIANE |
|            4 |     2055 | 2024-09-11 | Fluxo Demons | L   | 0.655      | -            | -                | -                | -         |    -5.63 | Babs, Dani, GaBi, khizha, REGIANE |
|            3 |     2213 | 2024-09-05 | Atrix        | L   | 0.615      | -            | -                | -                | -         |   -10.00 | Babs, Dani, GaBi, khizha, REGIANE |
|            2 |     2407 | 2024-08-29 | PEAK fe      | W   | 0.568      | 0.323        | 0.003 (0.001)    | 0.034 (0.006)    | 0 (0.000) |     7.47 | Babs, Dani, GaBi, khizha, REGIANE |
|            1 |     4342 | 2024-06-15 | MIBR fe      | W   | 0.069      | 0.250        | 0.001 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     0.90 | fly, GaBi, hera, josi, showliana  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,971.45)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-01 |      1.000 | $862.00        | $862.00         |
| 2024-10-18 |      0.902 | $1,800.00      | $1,623.46       |
| 2024-09-29 |      0.775 | $1,850.00      | $1,434.37       |
| 2024-06-15 |      0.069 | $750.00        | $51.63          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
