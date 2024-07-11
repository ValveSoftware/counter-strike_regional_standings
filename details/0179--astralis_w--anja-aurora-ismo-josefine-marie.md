### Roster Details<br />
Team Name: Astralis W<br />
Roster: anja, aurora, Ismo, josefine, marie<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [179](../standings_global.md)<br />
Regional Rank: [111]( ../standings_europe.md)<br />
Final Rank Value:  616.3<br />
<br />
Final Rank Value (616.3) = Starting Rank Value (639.0) + Head To Head Adjustments (-22.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 639.0
- 400 + ( ( 0.113 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 639.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     1861 | 2024-04-19 | ENCE Athena      | L   | 0.647      | -            | -                | -                | -         |    -9.26 | anja, aurora, Ismo, josefine, marie |
|           11 |     2032 | 2024-04-14 | NAVI Javelins    | L   | 0.613      | -            | -                | -                | -         |    -3.77 | anja, aurora, Ismo, josefine, marie |
|           10 |     2041 | 2024-04-13 | NIP Impact       | L   | 0.607      | -            | -                | -                | -         |    -5.99 | anja, aurora, Ismo, josefine, marie |
|            9 |     2060 | 2024-04-12 | Permitta W       | W   | 0.599      | 0.303        | 0.000 (0.000)    | 0.024 (0.004)    | 0 (0.000) |     6.46 | anja, aurora, Ismo, josefine, marie |
|            8 |     2081 | 2024-04-11 | Imperial fe      | L   | 0.593      | -            | -                | -                | -         |    -0.98 | anja, aurora, Ismo, josefine, marie |
|            7 |     2128 | 2024-04-10 | Imperial fe      | L   | 0.586      | -            | -                | -                | -         |    -0.98 | anja, aurora, Ismo, josefine, marie |
|            6 |     2208 | 2024-04-08 | Permitta W       | W   | 0.573      | 0.303        | 0.000 (0.000)    | 0.024 (0.004)    | 0 (0.000) |     6.12 | anja, aurora, Ismo, josefine, marie |
|            5 |     2354 | 2024-04-03 | NIP Impact       | L   | 0.540      | -            | -                | -                | -         |    -6.00 | anja, aurora, Ismo, josefine, marie |
|            4 |     2573 | 2024-03-21 | ex-GUILD fe      | L   | 0.454      | -            | -                | -                | -         |    -6.20 | anja, aurora, Ismo, josefine, marie |
|            3 |     2930 | 2024-03-06 | BIG EQUIPA       | L   | 0.354      | -            | -                | -                | -         |    -2.87 | anja, aurora, Ismo, josefine, marie |
|            2 |     3309 | 2024-02-18 | dreamcatchers fe | W   | 0.241      | 0.143        | 0.008 (0.000)    | 0.089 (0.003)    | 0 (0.000) |     4.21 | anja, aurora, Ismo, josefine, marie |
|            1 |     3313 | 2024-02-18 | Spirit fe        | L   | 0.240      | -            | -                | -                | -         |    -3.51 | anja, aurora, Ismo, josefine, marie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($561.41)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
